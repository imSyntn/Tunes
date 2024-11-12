import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { userType, ResultsInDataType, userDataType, dataInUserDataType } from '../App.types';

const Heart = ({ user, setUser, result, type }: { user: userType, setUser: React.Dispatch<React.SetStateAction<userType>>, result: ResultsInDataType, type: string }) => {

    const [isLiked, setIsLiked] = useState<boolean>(false)


    useEffect(() => {

        // if (`${type}s` in user.userSavedData) {
        const savedData = (user?.userSavedData as userDataType)[type + 's' as keyof userDataType] as dataInUserDataType[] | undefined;
        if (savedData) {
            const isAvailable = savedData.find((item: dataInUserDataType) => item.dataId === result.id);
            if (isAvailable) {
                setIsLiked(true);
            }
        }
        // }
    }, [])


    const addToLiked = async (e: any) => {
        e.stopPropagation()
        if (user.loggedIn) {
            try {
                const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/data`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        [type + 's']: {
                            dataId: result.id,
                            type: result.type,
                            title: result.title,
                            image: result.image?.[1]?.url
                        }
                    }),
                })
                const res = await req.json()
                if (res.removed) {
                    setIsLiked(false)
                } else {
                    setIsLiked(true)
                }
                setUser(prev => ({ ...prev, updated: Math.floor(Math.random() * 100) }))
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <motion.div className="heart" whileTap={{ scale: 1.5 }} transition={{ duration: 0.01 }} onClick={addToLiked} style={!user.loggedIn ? { cursor: 'initial', opacity: 0.3 } : {}}>
            {
                isLiked ? <FaHeart /> : <FaRegHeart />
            }
        </motion.div>
    )
}

export default Heart