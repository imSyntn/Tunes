import { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react'
import { useformatTime } from '../Utils/useformatTime';
import { useNameDot } from '../Utils/useNameDot';
import { useNavigate } from 'react-router-dom'
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { RiRepeat2Fill, RiRepeatOneLine } from "react-icons/ri";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { useAppContext } from '../Context/ContextProvider';
// import { ResultsInDataType } from '../App.types';
import { motion } from 'framer-motion'
import '../Styles/Player.scss'

const Player = () => {

    const navigate = useNavigate()
    const formatTime = useformatTime()
    const nameWithDot = useNameDot()

    // const songContext = useContext(Context)
    // if (!songContext) {
    //     return
    // }

    
    const limitCounter = useRef(Number(localStorage.getItem('limit')) || 0)

    const { tracks, setCurrentSongObj, songIndex, setSongIndex, setLimitExceed } = useAppContext();

    const audioRef = useRef<HTMLAudioElement>(null)
    // const trackListMomo = useRef<ResultsInDataType[] | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [visible, setVisible] = useState(true)
    const [audioOptions, setAudioOptions] = useState<any>({
        currentTime: ['-:-', 0],
        totalTime: ['-:-', 0],
        loop: true,
        volume: Number(localStorage.getItem('tunes-volume')) || 100
    })

    const disabled = (tracks.length == 0) ? true : false;

    useLayoutEffect(()=> {
        if(localStorage.getItem('tunes-loop')) {
            setAudioOptions((prev: any) => ({ ...prev, loop: !!Number(localStorage.getItem('tunes-loop')) }))
        }
    },[])

    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - 50)) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [window.innerHeight, document.documentElement.scrollHeight])

    // useEffect(() => {
    //     if (trackListMomo.current == null || trackListMomo.current?.[0]?.id != tracks?.[0].id) {
    //         setSongIndex(0)
    //     }
    //     trackListMomo.current = tracks;
    //     setCurrentSongObj(tracks[songIndex])
    // }, [tracks])

    useEffect(() => {
        if (tracks.length != 0) {
            setCurrentSongObj(tracks[songIndex])
        }
    }, [songIndex, tracks])

    const currentTimeOfAudio = () => {
        const CTime = audioRef.current?.currentTime || 0;
        setAudioOptions((prev: any) => ({ ...prev, currentTime: [formatTime(CTime), CTime] }))
    }

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            const duration = audioRef.current.duration;
            setAudioOptions((prev: any) => ({
                ...prev,
                totalTime: [formatTime(duration), duration],
                // currentTime: [formatTime(CTime), CTime]
            }));
            currentTimeOfAudio()
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = audioOptions.volume / 100;
            localStorage.setItem('tunes-volume', audioOptions.volume)
        }
    }, [audioOptions.volume])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play()
        } else {
            audioRef.current?.pause()
        }
    }, [isPlaying])

    const changeAudioTimeline = (e: any) => {
        if (audioRef.current) {
            const time = (audioRef.current.duration / 100) * e.target.value;
            audioRef.current.currentTime = time;
        }
    }

    const prevSong = useCallback(() => {
        if (songIndex - 1 >= 0) {
            setSongIndex((prev: number) => prev - 1)
        }
    }, [songIndex])

    const nextSong = useCallback(() => {
        if (songIndex + 1 < tracks.length) {
            setSongIndex((prev: number) => prev + 1)
        } else {
            setIsPlaying(false)
        }
    }, [tracks, songIndex])

    const artistsNAme = useMemo(() => (
        tracks[songIndex]?.artists?.primary?.map((acc: any) => ` ${acc.name}`).join(' ,')
    ), [tracks, songIndex])

    const ArtistChar = useMemo(() => {
        return (artistsNAme) ? nameWithDot(artistsNAme) : '';
    }, [artistsNAme])

    const songName = useMemo(() => {
        return (tracks[songIndex]?.name) ? nameWithDot(tracks[songIndex]?.name) : ''
    }, [tracks, songIndex])


    useEffect(()=> {
        if(isPlaying && tracks.length>0) {
            limitCounter.current+=1
            localStorage.setItem('limit', limitCounter.current.toString())
        }
    },[songIndex, tracks, isPlaying])

    useEffect(()=> {

        if(limitCounter.current>20) {
            setLimitExceed(true)
            setIsPlaying(false)
        }
    },[limitCounter.current])
    


    return (

        <motion.div initial={{ opacity: 1 }} animate={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'initial' : 'none' }} className='Player'>

            

            <audio preload='auto' src={tracks[songIndex]?.downloadUrl?.[4]?.url} ref={audioRef}
                loop={audioOptions.loop} onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={currentTimeOfAudio} autoPlay={ isPlaying ? true : false} onEnded={nextSong}
            />

            <div className="rangeAlike">
                <div className="range" style={{ width: `${(audioOptions.currentTime[1] / audioOptions.totalTime[1]) * 100}%` }}></div>
            </div>
            <input type="range" step='any' name="audioProgress" id="" value={(audioOptions.currentTime[1] / audioOptions.totalTime[1]) * 100 || 0} onInput={changeAudioTimeline} />


            <div className="img-Name">
                <img src={tracks[songIndex]?.image?.[0]?.url || '../../music.png'} alt="" style={disabled ? { opacity: 0.5 } : {}} />
                <div className="names">
                    <h4>{songName}</h4>
                    <p>{ArtistChar}</p>
                </div>
            </div>

            <div className="PlayerOptions">
                <motion.div whileTap={{ scale: 0.5 }} transition={{ duration: 0.01 }} className="loopOptions" onClick={() => {
                    setAudioOptions((prev: any) => {
                        localStorage.setItem('tunes-loop', !prev.loop ? '1' : '0')
                        return { ...prev, loop: !prev.loop }
                    })
                }}>
                    {
                        audioOptions.loop ? (
                            <RiRepeatOneLine style={disabled ? { opacity: 0.5, cursor: 'initial' } : {}} />
                        ) : (
                            <RiRepeat2Fill style={disabled ? { opacity: 0.5, cursor: 'initial' } : {}} />
                        )
                    }
                </motion.div>
                <motion.div whileTap={{ scale: 0.5 }} transition={{ duration: 0.01 }}>
                    <IoPlaySkipBackSharp onClick={prevSong} style={(disabled || songIndex == 0) ? { opacity: 0.5, cursor: 'initial' } : {}} />
                </motion.div>
                <motion.div whileTap={{ scale: 0.5 }} transition={{ duration: 0.01 }} className="playPause" onClick={() => {
                    (tracks.length > 0) && (
                        setIsPlaying(prev => !prev)
                    )
                }}>
                    {
                        isPlaying ? <IoMdPause style={disabled ? { opacity: 0.5, cursor: 'initial' } : {}} /> : <IoMdPlay style={disabled ? { opacity: 0.5, cursor: 'initial' } : {}} />
                    }
                </motion.div>
                <motion.div whileTap={{ scale: 0.5 }} transition={{ duration: 0.01 }}>
                    <IoPlaySkipForwardSharp onClick={nextSong} style={(disabled || songIndex == tracks.length - 1) ? { opacity: 0.5, cursor: 'initial' } : {}} />
                </motion.div>
                <motion.div whileTap={{ scale: 0.5 }} transition={{ duration: 0.01 }}>
                    <MdOutlineLibraryMusic onClick={() => {
                        if (!disabled) {
                            navigate(`/song/${tracks[songIndex]?.id}`)
                        }
                    }} style={disabled ? { opacity: 0.5, cursor: 'initial' } : {}} />
                </motion.div>
            </div>

            <p className='timestamp' style={disabled ? { opacity: 0.4 } : {}}>{audioOptions.currentTime[0]} <span>/</span> {audioOptions.totalTime[0]}</p>

            <div className="volume">
                <input type="range" value={audioOptions.volume} name="" id="" onInput={(e: any) => setAudioOptions((prev: any) => ({ ...prev, volume: e.target.value }))} />
                <HiMiniSpeakerWave style={(audioOptions.volume == 0 || disabled) ? { opacity: 0.4 } : {}} />
            </div>
        </motion.div>

    )
}

export default Player