import { useState } from 'react'
import '../../Styles/User/SavedData.scss'
import TrendingCards from '../Home/TrendingCards'
import { dataInUserDataType } from '../../App.types'

// const mockData = [
//     {
//         "id": "qbjJxHJh",
//         "title": "Tum Jo Mile Ho (From &quot;Vicky Vidya Ka Woh Wala Video&quot;)",
//         "subtitle": "Sachin-Jigar, Vishal Mishra, Priya Saraiya - Tum Jo Mile Ho (From &quot;Vicky Vidya Ka Woh Wala Video&quot;)",
//         "header_desc": "",
//         "type": "song",
//         "perma_url": "https://www.jiosaavn.com/song/tum-jo-mile-ho-from-vicky-vidya-ka-woh-wala-video/AQoBewx4fVs",
//         "image": "https://c.saavncdn.com/065/Tum-Jo-Mile-Ho-From-Vicky-Vidya-Ka-Woh-Wala-Video-Hindi-2024-20240919152725-150x150.jpg",
//         "language": "hindi",
//         "year": "2024",
//         "play_count": "121035",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "music": "Sachin-Jigar",
//             "album_id": "58111242",
//             "album": "Tum Jo Mile Ho (From &quot;Vicky Vidya Ka Woh Wala Video&quot;)",
//             "label": "T-Series",
//             "origin": "none",
//             "is_dolby_content": false,
//             "320kbps": "true",
//             "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyt5dzPemeDeRuaUfEHHFupSxI4KI6yfirxYZ7O/CpX6y+U5ih1Z8R9xw7tS9a8Gtq",
//             "encrypted_cache_url": "",
//             "encrypted_drm_cache_url": "",
//             "encrypted_drm_media_url": "ID2ieOjCrwdjlkMElYlzWCptgNdUpWD84wcu/mh9HhnrLw9fqM/PQ6W4Naex1R728w30bhd/0SwYU6lrQzG+io92mytrdt3FDnQW0nglPS4=",
//             "album_url": "https://www.jiosaavn.com/album/tum-jo-mile-ho-from-vicky-vidya-ka-woh-wala-video/-,DhIZQR7ew_",
//             "duration": "245",
//             "rights": {
//                 "code": "0",
//                 "cacheable": "true",
//                 "delete_cached_object": "true",
//                 "reason": ""
//             },
//             "cache_state": "false",
//             "has_lyrics": "false",
//             "lyrics_snippet": "",
//             "starred": "false",
//             "copyright_text": "℗ 2024 Super Cassettes Industries Private Limited",
//             "artistMap": {
//                 "primary_artists": [
//                     {
//                         "id": "461968",
//                         "name": "Sachin-Jigar",
//                         "role": "singer",
//                         "image": "https://c.saavncdn.com/artists/Sachin-Jigar_002_20180507092234_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sachin-jigar-songs/JO1Nx088Pfo_"
//                     },
//                     {
//                         "id": "702452",
//                         "name": "Vishal Mishra",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_"
//                     },
//                     {
//                         "id": "673160",
//                         "name": "Priya Saraiya",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Priya_Saraiya_003_20211123104635_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/priya-saraiya-songs/DhHUFwiOfxE_"
//                     }
//                 ],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "461968",
//                         "name": "Sachin-Jigar",
//                         "role": "singer",
//                         "image": "https://c.saavncdn.com/artists/Sachin-Jigar_002_20180507092234_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sachin-jigar-songs/JO1Nx088Pfo_"
//                     },
//                     {
//                         "id": "702452",
//                         "name": "Vishal Mishra",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_"
//                     },
//                     {
//                         "id": "673160",
//                         "name": "Priya Saraiya",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Priya_Saraiya_003_20211123104635_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/priya-saraiya-songs/DhHUFwiOfxE_"
//                     },
//                     {
//                         "id": "702528",
//                         "name": "Rajkummar Rao",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Rajkummar_Rao_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rajkummar-rao-songs/r50Edk6TdEc_"
//                     },
//                     {
//                         "id": "5264118",
//                         "name": "Tripti Dimri",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Tripti_Dimri_000_20240722103015_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tripti-dimri-songs/yr4i-N20I8k_"
//                     },
//                     {
//                         "id": "459847",
//                         "name": "Vijay Raaz",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/881/Vindhyasini-Paap-Nasini-2000-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vijay-raaz-songs/uZjXW4eFGL8_"
//                     },
//                     {
//                         "id": "457772",
//                         "name": "Mallika Sherawat",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Mallika_Sherawat_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/mallika-sherawat-songs/Se,aqs8i-f8_"
//                     },
//                     {
//                         "id": "465026",
//                         "name": "Tiku Talsania",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Tiku_Talsania_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tiku-talsania-songs/AvnUZY4lp18_"
//                     },
//                     {
//                         "id": "456790",
//                         "name": "Rakesh Bedi",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Rakesh_Bedi_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rakesh-bedi-songs/GuS6sC3FvB4_"
//                     },
//                     {
//                         "id": "456413",
//                         "name": "Archana Puran Singh",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Archana_Puran_Singh_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/archana-puran-singh-songs/wXii0WFyxTg_"
//                     },
//                     {
//                         "id": "457800",
//                         "name": "Mukesh Tiwari",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/235/Sali-Ji-Rang-Dalwa-Lijiye-Bhojpuri-2020-20200220055052-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/mukesh-tiwari-songs/IGT,dnQzENg_"
//                     },
//                     {
//                         "id": "458254",
//                         "name": "Ashwini Kalsekar",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/956/Ramayana-in-Celebrity-Voices-Vol-7-Hindi-2013-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/ashwini-kalsekar-songs/dq1Vv0KMp2M_"
//                     },
//                     {
//                         "id": "17303426",
//                         "name": "Saharsh Kumar Shukla",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/saharsh-kumar-shukla-songs/lN4JlHjAsig_"
//                     },
//                     {
//                         "id": "660947",
//                         "name": "Mast Ali",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/899/5-Pappe-Punjabi-2016-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/mast-ali-songs/xI5gUVTDmm8_"
//                     }
//                 ]
//             },
//             "release_date": "2024-09-19",
//             "label_url": "",
//             "vcode": "010910092647698",
//             "vlink": "https://jiotunepreview.jio.com/content/Converted/010910092605544.mp3",
//             "triller_available": false,
//             "request_jiotune_flag": false,
//             "webp": ""
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "58075466",
//         "title": "Chal Kudiye (From \"Jigra\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/chal-kudiye-from-jigra/NQTxBUYa6kA_",
//         "image": "https://c.saavncdn.com/064/Chal-Kudiye-From-Jigra-Hindi-2024-20240918073952-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-17",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "511658",
//                         "name": "Alia Bhatt",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/alia-bhatt-songs/,henzzVDXDQ_"
//                     },
//                     {
//                         "id": "468245",
//                         "name": "Diljit Dosanjh",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/diljit-dosanjh-songs/oIVHdWIO5F8_"
//                     },
//                     {
//                         "id": "511658",
//                         "name": "Alia Bhatt",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/alia-bhatt-songs/,henzzVDXDQ_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "ElVxoOuU",
//         "title": "Dheemi Dheemi (From &quot;Amar Prem Ki Prem Kahani&quot;)",
//         "subtitle": "Aasa Singh, Prasad S, Kunaal Vermaa - Dheemi Dheemi (From &quot;Amar Prem Ki Prem Kahani&quot;)",
//         "header_desc": "",
//         "type": "song",
//         "perma_url": "https://www.jiosaavn.com/song/dheemi-dheemi-from-amar-prem-ki-prem-kahani/NQQ9SRt-QmY",
//         "image": "https://c.saavncdn.com/942/Dheemi-Dheemi-From-Amar-Prem-Ki-Prem-Kahani-Hindi-2024-20240916181341-150x150.jpg",
//         "language": "hindi",
//         "year": "2024",
//         "play_count": "23138",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "music": "Aasa Singh, Prasad S, Kunaal Vermaa",
//             "album_id": "58073885",
//             "album": "Dheemi Dheemi (From &quot;Amar Prem Ki Prem Kahani&quot;)",
//             "label": "Times Music",
//             "origin": "none",
//             "is_dolby_content": false,
//             "320kbps": "true",
//             "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyLc6lPegayhqUJvnfCaAmHbe/AX8h7CeFuAJ1I7/WvY9/sAmrU2YlZhw7tS9a8Gtq",
//             "encrypted_cache_url": "",
//             "encrypted_drm_cache_url": "",
//             "encrypted_drm_media_url": "ID2ieOjCrwdjlkMElYlzWCptgNdUpWD8OTOusgOu6+XZ1ewi+BoUmcfFJLI6YF/GtjkhggeWwwugNaldO6HtUo92mytrdt3FDnQW0nglPS4=",
//             "album_url": "https://www.jiosaavn.com/album/dheemi-dheemi-from-amar-prem-ki-prem-kahani/Fcg17RuTeBI_",
//             "duration": "238",
//             "rights": {
//                 "code": "0",
//                 "cacheable": "true",
//                 "delete_cached_object": "true",
//                 "reason": ""
//             },
//             "cache_state": "false",
//             "has_lyrics": "false",
//             "lyrics_snippet": "",
//             "starred": "false",
//             "copyright_text": "℗ 2024 Times Music",
//             "artistMap": {
//                 "primary_artists": [
//                     {
//                         "id": "6562386",
//                         "name": "Aasa Singh",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/279/Ye-Duuriyaan-Hindi-2019-20191031124001-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/aasa-singh-songs/n9dprkJwq0U_"
//                     },
//                     {
//                         "id": "9230893",
//                         "name": "Prasad S",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/prasad-s-songs/yDGl6AlVg1E_"
//                     },
//                     {
//                         "id": "710601",
//                         "name": "Kunaal Vermaa",
//                         "role": "music",
//                         "image": "https://c.saavncdn.com/artists/Kunaal_Vermaa_001_20230613121244_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kunaal-vermaa-songs/DGLdKvhUtpU_"
//                     }
//                 ],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "6562386",
//                         "name": "Aasa Singh",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/279/Ye-Duuriyaan-Hindi-2019-20191031124001-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/aasa-singh-songs/n9dprkJwq0U_"
//                     },
//                     {
//                         "id": "9230893",
//                         "name": "Prasad S",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/prasad-s-songs/yDGl6AlVg1E_"
//                     },
//                     {
//                         "id": "710601",
//                         "name": "Kunaal Vermaa",
//                         "role": "music",
//                         "image": "https://c.saavncdn.com/artists/Kunaal_Vermaa_001_20230613121244_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kunaal-vermaa-songs/DGLdKvhUtpU_"
//                     }
//                 ]
//             },
//             "release_date": "2024-09-20",
//             "label_url": "",
//             "vcode": "010910782649343",
//             "vlink": "https://jiotunepreview.jio.com/content/Converted/010910782605140.mp3",
//             "triller_available": false,
//             "request_jiotune_flag": false,
//             "webp": ""
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57937485",
//         "title": "Kahan Shuru Kahan Khatam",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/kahan-shuru-kahan-khatam/4qPx0SBK4oo_",
//         "image": "https://c.saavncdn.com/982/Kahan-Shuru-Kahan-Khatam-Hindi-2024-20240916083905-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-13",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "3623109",
//                         "name": "Dhvani Bhanushali",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/dhvani-bhanushali-songs/,HZMDaWbOBY_"
//                     },
//                     {
//                         "id": "3623109",
//                         "name": "Dhvani Bhanushali",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/dhvani-bhanushali-songs/,HZMDaWbOBY_"
//                     },
//                     {
//                         "id": "455129",
//                         "name": "Sunidhi Chauhan",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sunidhi-chauhan-songs/ZIyMwJzHJwI_"
//                     },
//                     {
//                         "id": "2905459",
//                         "name": "Varun Jain",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/varun-jain-songs/6a1wNLBV3JU_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57801497",
//         "title": "Phoolon Ka Taaro Ka (From \"Jigra\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/phoolon-ka-taaro-ka-from-jigra/xFBIlJUtg20_",
//         "image": "https://c.saavncdn.com/910/Phoolon-Ka-Taaro-Ka-From-Jigra-Hindi-2024-20240906123907-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-08",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "17790957",
//                         "name": "Vedang Raina",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vedang-raina-songs/4yhUVwCvgIQ_"
//                     },
//                     {
//                         "id": "17790957",
//                         "name": "Vedang Raina",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vedang-raina-songs/4yhUVwCvgIQ_"
//                     },
//                     {
//                         "id": "5027335",
//                         "name": "Achint",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/achint-songs/0EpuqFcYpTw_"
//                     },
//                     {
//                         "id": "531902",
//                         "name": "Varun Grover",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/varun-grover-songs/7IL072kXB-M_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "58007425",
//         "title": "Kasturi (From \"Amar Prem Ki Prem Kahani\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/kasturi-from-amar-prem-ki-prem-kahani/dZkwPc11scM_",
//         "image": "https://c.saavncdn.com/836/Kasturi-From-Amar-Prem-Ki-Prem-Kahani-Hindi-2024-20240913185507-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-17",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "459320",
//                         "name": "Arijit Singh",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/arijit-singh-songs/LlRWpHzy3Hk_"
//                     },
//                     {
//                         "id": "9230893",
//                         "name": "Prasad S",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/prasad-s-songs/yDGl6AlVg1E_"
//                     },
//                     {
//                         "id": "710601",
//                         "name": "Kunaal Vermaa",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kunaal-vermaa-songs/DGLdKvhUtpU_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "qPAbwAvc",
//         "title": "Yaad Reh Jaati Hai (From &quot;The Buckingham Murders&quot;)",
//         "subtitle": "B Praak, Payal Dev, Kunaal Vermaa, Sameer Anjaan, Nadeem-Shravan - Yaad Reh Jaati Hai (From &quot;The Buckingham Murders&quot;)",
//         "header_desc": "",
//         "type": "song",
//         "perma_url": "https://www.jiosaavn.com/song/yaad-reh-jaati-hai-from-the-buckingham-murders/ATgqUwNxQVA",
//         "image": "https://c.saavncdn.com/454/Yaad-Reh-Jaati-Hai-From-The-Buckingham-Murders-Hindi-2024-20240918221712-150x150.jpg",
//         "language": "hindi",
//         "year": "2024",
//         "play_count": "48997",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "music": "B Praak, Payal Dev, Kunaal Vermaa, Sameer Anjaan, Nadeem-Shravan",
//             "album_id": "58150304",
//             "album": "Yaad Reh Jaati Hai (From &quot;The Buckingham Murders&quot;)",
//             "label": "Tips Industries Ltd",
//             "origin": "none",
//             "is_dolby_content": false,
//             "320kbps": "true",
//             "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyK3ZVEPR7bew6XpWOcdP+l+poFhHmntx4VWmDl/6j4G8LYkhC1KP27hw7tS9a8Gtq",
//             "encrypted_cache_url": "",
//             "encrypted_drm_cache_url": "",
//             "encrypted_drm_media_url": "ID2ieOjCrwdjlkMElYlzWCptgNdUpWD8TBwePUP5W95Y8Eg5QvBO9+OqMMv+II2nAp6IP8EookbnwovXDspiBo92mytrdt3FDnQW0nglPS4=",
//             "album_url": "https://www.jiosaavn.com/album/yaad-reh-jaati-hai-from-the-buckingham-murders/b86ASEDjzos_",
//             "duration": "253",
//             "rights": {
//                 "code": "0",
//                 "cacheable": "true",
//                 "delete_cached_object": "true",
//                 "reason": ""
//             },
//             "cache_state": "false",
//             "has_lyrics": "false",
//             "lyrics_snippet": "",
//             "starred": "false",
//             "copyright_text": "℗ 2024 Tips Music Ltd.",
//             "artistMap": {
//                 "primary_artists": [
//                     {
//                         "id": "788130",
//                         "name": "B Praak",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/B_Praak_001_20191118112005_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/b-praak-songs/CfABr-vmQdw_"
//                     },
//                     {
//                         "id": "653208",
//                         "name": "Payal Dev",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Payal_Dev_001_20191220112849_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/payal-dev-songs/szd0Qcak34Q_"
//                     },
//                     {
//                         "id": "710601",
//                         "name": "Kunaal Vermaa",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Kunaal_Vermaa_001_20230613121244_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kunaal-vermaa-songs/DGLdKvhUtpU_"
//                     },
//                     {
//                         "id": "455415",
//                         "name": "Sameer Anjaan",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Sameer-20170714064856_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sameer-anjaan-songs/zbXOIZIhW-8_"
//                     },
//                     {
//                         "id": "456307",
//                         "name": "Nadeem-Shravan",
//                         "role": "music",
//                         "image": "https://c.saavncdn.com/artists/Nadeem_Shravan_001_20230623105852_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/nadeem-shravan-songs/si,-ohGcPDo_"
//                     }
//                 ],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "788130",
//                         "name": "B Praak",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/B_Praak_001_20191118112005_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/b-praak-songs/CfABr-vmQdw_"
//                     },
//                     {
//                         "id": "653208",
//                         "name": "Payal Dev",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Payal_Dev_001_20191220112849_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/payal-dev-songs/szd0Qcak34Q_"
//                     },
//                     {
//                         "id": "710601",
//                         "name": "Kunaal Vermaa",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Kunaal_Vermaa_001_20230613121244_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kunaal-vermaa-songs/DGLdKvhUtpU_"
//                     },
//                     {
//                         "id": "455415",
//                         "name": "Sameer Anjaan",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Sameer-20170714064856_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sameer-anjaan-songs/zbXOIZIhW-8_"
//                     },
//                     {
//                         "id": "456307",
//                         "name": "Nadeem-Shravan",
//                         "role": "music",
//                         "image": "https://c.saavncdn.com/artists/Nadeem_Shravan_001_20230623105852_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/nadeem-shravan-songs/si,-ohGcPDo_"
//                     },
//                     {
//                         "id": "852212",
//                         "name": "Kareena Kapoor Khan",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Kareena_Kapoor_Khan_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kareena-kapoor-khan-songs/jkhz7RSFGqE_"
//                     },
//                     {
//                         "id": "770550",
//                         "name": "Keith Allen",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/keith-allen-songs/rLIlIV8tZQk_"
//                     }
//                 ]
//             },
//             "release_date": "2024-09-19",
//             "label_url": "",
//             "triller_available": false,
//             "request_jiotune_flag": false,
//             "webp": ""
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "KIDLxMV4",
//         "title": "Zindagi (From &quot;Binny And Family&quot;)",
//         "subtitle": "Vishal Mishra, Kaushal Kishore - Zindagi (From &quot;Binny And Family&quot;)",
//         "header_desc": "",
//         "type": "song",
//         "perma_url": "https://www.jiosaavn.com/song/zindagi-from-binny-and-family/OyEvfQx9YQc",
//         "image": "https://c.saavncdn.com/263/Zindagi-From-Binny-And-Family-Hindi-2024-20240919201015-150x150.jpg",
//         "language": "hindi",
//         "year": "2024",
//         "play_count": "12848",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "music": "Vishal Mishra",
//             "album_id": "58190692",
//             "album": "Zindagi (From &quot;Binny And Family&quot;)",
//             "label": "T-Series",
//             "origin": "none",
//             "is_dolby_content": false,
//             "320kbps": "true",
//             "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyHply7JV7vclenltEd9ordl+aiqcMTXtIkHpAhmYY5ltV5AVbGkJNnRw7tS9a8Gtq",
//             "encrypted_cache_url": "",
//             "encrypted_drm_cache_url": "",
//             "encrypted_drm_media_url": "ID2ieOjCrwdjlkMElYlzWCptgNdUpWD8YAc+hsGyy3pUkNGD8VpHZw86B0pZDaAw62d/NccjicaVE55BR3hWdY92mytrdt3FDnQW0nglPS4=",
//             "album_url": "https://www.jiosaavn.com/album/zindagi-from-binny-and-family/yRgNUj7YWpY_",
//             "duration": "281",
//             "rights": {
//                 "code": "0",
//                 "cacheable": "true",
//                 "delete_cached_object": "true",
//                 "reason": ""
//             },
//             "cache_state": "false",
//             "has_lyrics": "false",
//             "lyrics_snippet": "",
//             "starred": "false",
//             "copyright_text": "℗ 2024 Super Cassettes Industries Private Limited",
//             "artistMap": {
//                 "primary_artists": [
//                     {
//                         "id": "702452",
//                         "name": "Vishal Mishra",
//                         "role": "singer",
//                         "image": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_"
//                     },
//                     {
//                         "id": "6122988",
//                         "name": "Kaushal Kishore",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Kaushal_Kishore_20200617105554_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kaushal-kishore-songs/SKYV3NbXD0g_"
//                     }
//                 ],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "702452",
//                         "name": "Vishal Mishra",
//                         "role": "singer",
//                         "image": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_"
//                     },
//                     {
//                         "id": "6122988",
//                         "name": "Kaushal Kishore",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/artists/Kaushal_Kishore_20200617105554_150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kaushal-kishore-songs/SKYV3NbXD0g_"
//                     },
//                     {
//                         "id": "741620",
//                         "name": "Pankaj Kapoor",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/pankaj-kapoor-songs/kXA1HHEiflY_"
//                     },
//                     {
//                         "id": "456305",
//                         "name": "Himani Shivpuri",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/himani-shivpuri-songs/YizWNc34wq8_"
//                     },
//                     {
//                         "id": "539092",
//                         "name": "Rajesh Kumar",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/591/Kaisa-Tha-Wo-Rishta-Hindi-2018-20180802-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rajesh-kumar-songs/KhAuKmBqu,k_"
//                     },
//                     {
//                         "id": "20640687",
//                         "name": "Charu Shankar",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/charu-shankar-songs/Hyknvg4P4Rc_"
//                     },
//                     {
//                         "id": "20640688",
//                         "name": "Anjini Dhawan",
//                         "role": "",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anjini-dhawan-songs/6LaZRtk4p9o_"
//                     },
//                     {
//                         "id": "4489214",
//                         "name": "Naman Tripathi",
//                         "role": "",
//                         "image": "https://c.saavncdn.com/573/Yaar-Mere-Dumdaar-Punjabi-2018-20180222222303-150x150.jpg",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/naman-tripathi-songs/kqCfvueLk2I_"
//                     }
//                 ]
//             },
//             "release_date": "2024-09-20",
//             "label_url": "",
//             "triller_available": false,
//             "request_jiotune_flag": false,
//             "webp": ""
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57860129",
//         "title": "Tere Dar Pe Sanam (From \"Beinteha\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/tere-dar-pe-sanam-from-beinteha/gBoXe1zI8vE_",
//         "image": "https://c.saavncdn.com/895/Tere-Dar-Pe-Sanam-From-Beinteha-Hindi-2024-20240909161117-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-09",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "8137874",
//                         "name": "KS Abhishek",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/ks-abhishek-songs/XGHk9eGGfYI_"
//                     },
//                     {
//                         "id": "8137874",
//                         "name": "KS Abhishek",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/ks-abhishek-songs/XGHk9eGGfYI_"
//                     },
//                     {
//                         "id": "653204",
//                         "name": "Dev Negi",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/dev-negi-songs/NpCqdI4dD5U_"
//                     },
//                     {
//                         "id": "531639",
//                         "name": "Neeti Mohan",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/neeti-mohan-songs/3rVrdWgQlqs_"
//                     },
//                     {
//                         "id": "8137874",
//                         "name": "KS Abhishek",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/ks-abhishek-songs/XGHk9eGGfYI_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "58107290",
//         "title": "Yudhra",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/yudhra/NSNSnbstq94_",
//         "image": "https://c.saavncdn.com/016/Yudhra-Hindi-2024-20240917155055-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-17",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455293",
//                         "name": "Shankar Ehsaan Loy",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shankar-ehsaan-loy-songs/P30FpI2M9ok_"
//                     },
//                     {
//                         "id": "3517374",
//                         "name": "Prem & Hardeep",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/prem-hardeep-songs/HAV5vA,a6rs_"
//                     },
//                     {
//                         "id": "455447",
//                         "name": "Javed Akhtar",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/javed-akhtar-songs/OSqyhF26jE8_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57555384",
//         "title": "Sada Pyaar Tut Gaya (From \"The Buckingham Murders\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/sada-pyaar-tut-gaya-from-the-buckingham-murders/XeQ8sWvNJ,E_",
//         "image": "https://c.saavncdn.com/532/Sada-Pyaar-Tut-Gaya-From-The-Buckingham-Murders-Hindi-2024-20240829181051-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-29",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "787380",
//                         "name": "Devshi Khanduri",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/devshi-khanduri-songs/gCv1qK44-Hk_"
//                     },
//                     {
//                         "id": "457150",
//                         "name": "Bally Sagoo",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/bally-sagoo-songs/ZyZXpX3sLdE_"
//                     },
//                     {
//                         "id": "9675664",
//                         "name": "Vicky Marley",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/vicky-marley-songs/xxwONVyKb,c_"
//                     },
//                     {
//                         "id": "457150",
//                         "name": "Bally Sagoo",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/bally-sagoo-songs/ZyZXpX3sLdE_"
//                     },
//                     {
//                         "id": "787380",
//                         "name": "Devshi Khanduri",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/devshi-khanduri-songs/gCv1qK44-Hk_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57856784",
//         "title": "Manasilaayo (From \"Vettaiyan The Hunter (Hindi)\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/manasilaayo-from-vettaiyan-the-hunter-hindi/SP-1lz9tqgo_",
//         "image": "https://c.saavncdn.com/291/Manasilaayo-From-Vettaiyan-The-Hunter-Hindi-Hindi-2024-20240909151106-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-09",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     },
//                     {
//                         "id": "459585",
//                         "name": "Nakash Aziz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/nakash-aziz-songs/,wWkOOUle4o_"
//                     },
//                     {
//                         "id": "782015",
//                         "name": "Deepthi Suresh",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/deepthi-suresh-songs/HJHl4Ns2Lw8_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57964145",
//         "title": "Sector 36",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/sector-36/eEIIF37HVGY_",
//         "image": "https://c.saavncdn.com/910/Sector-36-Hindi-2024-20240912121324-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-12",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455494",
//                         "name": "Various Artists",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/various-artists-songs/ztKx8IUBme8_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57019500",
//         "title": "Stree 2",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/stree-2/VCjKuSJcwxs_",
//         "image": "https://c.saavncdn.com/373/Stree-2-Hindi-2024-20240828083834-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-10",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "461968",
//                         "name": "Sachin-Jigar",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sachin-jigar-songs/JO1Nx088Pfo_"
//                     },
//                     {
//                         "id": "458681",
//                         "name": "Amitabh Bhattacharya",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-songs/hsNRL6ZmJmo_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57124070",
//         "title": "Vedaa",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/vedaa/Cd7EQe-kHJE_",
//         "image": "https://c.saavncdn.com/527/Vedaa-Hindi-2024-20240814061848-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-13",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "743637",
//                         "name": "Amaal Mallik",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/amaal-mallik-songs/hZrw5p6a5Sk_"
//                     },
//                     {
//                         "id": "587157",
//                         "name": "Yuva",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/yuva-songs/2kVQxDkpVGw_"
//                     },
//                     {
//                         "id": "746774",
//                         "name": "Manan Bhardwaj",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/manan-bhardwaj-songs/PHyqUR9DoKY_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57098335",
//         "title": "Khel Khel Mein",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/khel-khel-mein/s-Em95RXh88_",
//         "image": "https://c.saavncdn.com/375/Khel-Khel-Mein-Hindi-2024-20240813201004-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-13",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455494",
//                         "name": "Various Artists",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/various-artists-songs/ztKx8IUBme8_"
//                     },
//                     {
//                         "id": "455494",
//                         "name": "Various Artists",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/various-artists-songs/ztKx8IUBme8_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "58030680",
//         "title": "Maaya Ka Moh",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/maaya-ka-moh/N9vPg5n6MEU_",
//         "image": "https://c.saavncdn.com/157/Maaya-Ka-Moh-Hindi-2024-20240914121011-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-19",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "510852",
//                         "name": "Shor",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shor-songs/zJ1PQCu7xXo_"
//                     },
//                     {
//                         "id": "510852",
//                         "name": "Shor",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shor-songs/zJ1PQCu7xXo_"
//                     },
//                     {
//                         "id": "510852",
//                         "name": "Shor",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shor-songs/zJ1PQCu7xXo_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57648519",
//         "title": "Dhadkano Main (From \"Martin\") (Hindi)",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/dhadkano-main-from-martin-hindi/J,qPWjs8nqc_",
//         "image": "https://c.saavncdn.com/738/Dhadkano-Main-From-Martin-Hindi-Hindi-2024-20240905123918-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-03",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "456531",
//                         "name": "Mani Sharma",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/mani-sharma-songs/0YlhZhbdQYc_"
//                     },
//                     {
//                         "id": "455926",
//                         "name": "Javed Ali",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/javed-ali-songs/iJXgfejIuJQ_"
//                     },
//                     {
//                         "id": "467309",
//                         "name": "Palak Muchhal",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/palak-muchhal-songs/9RWBvFQhPxw_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57423899",
//         "title": "Arzi ( From \"A Wedding Story\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/arzi-from-a-wedding%c2%a0story/juRV-loVdfY_",
//         "image": "https://c.saavncdn.com/445/Arzi-Hindi-2024-20240824115505-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-26",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3619482",
//                         "name": "Sucheta Bhattacharjee",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sucheta-bhattacharjee-songs/SqvqxT94bRk_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     },
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3619482",
//                         "name": "Sucheta Bhattacharjee",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sucheta-bhattacharjee-songs/SqvqxT94bRk_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     },
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3619482",
//                         "name": "Sucheta Bhattacharjee",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sucheta-bhattacharjee-songs/SqvqxT94bRk_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "56928116",
//         "title": "Phir Aayi Hasseen Dillruba",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/phir-aayi-hasseen-dillruba/FjvjpCZcEGU_",
//         "image": "https://c.saavncdn.com/399/Phir-Aayi-Hasseen-Dillruba-Hindi-2024-20240807131003-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-07",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "3623112",
//                         "name": "Sachet-Parampara",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sachet-parampara-songs/-01nNmS1dCs_"
//                     },
//                     {
//                         "id": "819413",
//                         "name": "Anurag Saikia",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anurag-saikia-songs/ExOkjYwOmkI_"
//                     },
//                     {
//                         "id": "3623112",
//                         "name": "Sachet-Parampara",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/sachet-parampara-songs/-01nNmS1dCs_"
//                     },
//                     {
//                         "id": "819413",
//                         "name": "Anurag Saikia",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anurag-saikia-songs/ExOkjYwOmkI_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "56438203",
//         "title": "Fire Song (From \"Kanguva\") (Hindi)",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/fire-song-from-kanguva-hindi/gV9Bj96gdX4_",
//         "image": "https://c.saavncdn.com/070/Fire-Song-From-Kanguva-Hindi-Hindi-2024-20240723163751-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-07-23",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455170",
//                         "name": "Devi Sri Prasad",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/devi-sri-prasad-songs/M0dlT,PMjDs_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57591879",
//         "title": "Emergency",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/emergency/8fX,91vLEx4_",
//         "image": "https://c.saavncdn.com/996/Emergency-Hindi-2024-20240830175041-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-31",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455454",
//                         "name": "G.V. Prakash Kumar",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/g.v.-prakash-kumar-songs/b2CMYiogn3E_"
//                     },
//                     {
//                         "id": "711766",
//                         "name": "Arko",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/arko-songs/ut1w0VmE6dg_"
//                     },
//                     {
//                         "id": "473441",
//                         "name": "Manoj Muntashir",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/manoj-muntashir-songs/eaiDjU0BhyA_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57716173",
//         "title": "Daavudi (From \"Devara Part 1\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/daavudi-from-devara-part-1/KPZJDdUUB5I_",
//         "image": "https://c.saavncdn.com/150/Daavudi-From-Devara-Part-1-Hindi-2024-20240904121012-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-04",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "459585",
//                         "name": "Nakash Aziz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/nakash-aziz-songs/,wWkOOUle4o_"
//                     },
//                     {
//                         "id": "2026662",
//                         "name": "Akasa",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/akasa-songs/tGvn0AlbB7g_"
//                     },
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     },
//                     {
//                         "id": "459585",
//                         "name": "Nakash Aziz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/nakash-aziz-songs/,wWkOOUle4o_"
//                     },
//                     {
//                         "id": "2026662",
//                         "name": "Akasa",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/akasa-songs/tGvn0AlbB7g_"
//                     },
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57734502",
//         "title": "The Last Song - Arzi Reprise (From \"A Wedding Story\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/the-last-song-arzi-reprise-from-a-wedding-story/GZuQ5Bd5SY8_",
//         "image": "https://c.saavncdn.com/109/The-Last-Song-Arzi-Reprise-From-A-Wedding-Story-Hindi-2024-20240904211008-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-06",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "531639",
//                         "name": "Neeti Mohan",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/neeti-mohan-songs/3rVrdWgQlqs_"
//                     },
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     },
//                     {
//                         "id": "531639",
//                         "name": "Neeti Mohan",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/neeti-mohan-songs/3rVrdWgQlqs_"
//                     },
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     },
//                     {
//                         "id": "531639",
//                         "name": "Neeti Mohan",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/neeti-mohan-songs/3rVrdWgQlqs_"
//                     },
//                     {
//                         "id": "6741070",
//                         "name": "Rahi Sayed",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/rahi-sayed-songs/vCWw3OlNhhg_"
//                     },
//                     {
//                         "id": "3336170",
//                         "name": "Tallz",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/tallz-songs/4b5vl3Zieic_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57552882",
//         "title": "Surya's Saturday (Hindi)",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/suryas-saturday-hindi/ef,UW-F6Jvc_",
//         "image": "https://c.saavncdn.com/489/Surya-s-Saturday-Hindi-Hindi-2024-20240829143850-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-29",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "546740",
//                         "name": "Jakes Bejoy",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/jakes-bejoy-songs/7PnUvQMSPmE_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "56856180",
//         "title": "Dheere Dheere (From \"Devara Part 1\")",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/dheere-dheere-from-devara-part-1/pvJJ9bmMAYU_",
//         "image": "https://c.saavncdn.com/428/Dheere-Dheere-From-Devara-Part-1-Hindi-2024-20240805181003-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-05",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     },
//                     {
//                         "id": "455148",
//                         "name": "Shilpa Rao",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shilpa-rao-songs/IVd,BmJX7sA_"
//                     },
//                     {
//                         "id": "461070",
//                         "name": "Kausar Munir",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kausar-munir-songs/ZIoQfneojLU_"
//                     },
//                     {
//                         "id": "461070",
//                         "name": "Kausar Munir",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kausar-munir-songs/ZIoQfneojLU_"
//                     },
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     },
//                     {
//                         "id": "455663",
//                         "name": "Anirudh Ravichander",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anirudh-ravichander-songs/lBzQd8c-xCY_"
//                     },
//                     {
//                         "id": "455148",
//                         "name": "Shilpa Rao",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/shilpa-rao-songs/IVd,BmJX7sA_"
//                     },
//                     {
//                         "id": "461070",
//                         "name": "Kausar Munir",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/kausar-munir-songs/ZIoQfneojLU_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57649281",
//         "title": "ARM",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/arm/KuaZPX60lvY_",
//         "image": "https://c.saavncdn.com/634/ARM-Hindi-2024-20240915022604-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-02",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "3972284",
//                         "name": "Anila Rajeev",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anila-rajeev-songs/1qsHct8nH9g_"
//                     },
//                     {
//                         "id": "505228",
//                         "name": "Abhay Jodhpurkar",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/abhay-jodhpurkar-songs/hquvu2O3plw_"
//                     },
//                     {
//                         "id": "3972284",
//                         "name": "Anila Rajeev",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/anila-rajeev-songs/1qsHct8nH9g_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57137922",
//         "title": "Thangalaan (Original Motion Picture Soundtrack) (Hindi)",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/thangalaan-original-motion-picture-soundtrack-hindi/S0LGjyWQxuQ_",
//         "image": "https://c.saavncdn.com/270/Thangalaan-Original-Motion-Picture-Soundtrack-Hindi-Hindi-2024-20240814155631-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-08-14",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "509710",
//                         "name": "G. V. Prakash",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/g.-v.-prakash-songs/89,IarjjfeE_"
//                     },
//                     {
//                         "id": "739770",
//                         "name": "Raqueeb Alam",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/raqueeb-alam-songs/OubvCu9W,UY_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57687812",
//         "title": "Thalapathy Is The G.O.A.T.",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/thalapathy-is-the-g.o.a.t./5Kcex,N2HZI_",
//         "image": "https://c.saavncdn.com/368/Thalapathy-Is-The-G-O-A-T-Hindi-2024-20240903191004-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-03",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "456091",
//                         "name": "Yuvan Shankar Raja",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/yuvan-shankar-raja-songs/33rudDAZmSk_"
//                     },
//                     {
//                         "id": "456091",
//                         "name": "Yuvan Shankar Raja",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/yuvan-shankar-raja-songs/33rudDAZmSk_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     },
//     {
//         "id": "57591741",
//         "title": "Aho Vikramaarka (Hindi)",
//         "subtitle": "",
//         "header_desc": "",
//         "type": "album",
//         "perma_url": "https://www.jiosaavn.com/album/aho-vikramaarka-hindi/ji4LIr1ria0_",
//         "image": "https://c.saavncdn.com/953/Aho-Vikramaarka-Hindi-Hindi-2024-20240830173757-150x150.jpg",
//         "language": "hindi",
//         "year": "",
//         "play_count": "",
//         "explicit_content": "0",
//         "list_count": "0",
//         "list_type": "",
//         "list": "",
//         "more_info": {
//             "song_count": "0",
//             "release_date": "2024-09-01",
//             "artistMap": {
//                 "primary_artists": [],
//                 "featured_artists": [],
//                 "artists": [
//                     {
//                         "id": "711766",
//                         "name": "Arko",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/arko-songs/ut1w0VmE6dg_"
//                     },
//                     {
//                         "id": "697634",
//                         "name": "Ravi Basrur",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/ravi-basrur-songs/ptQxxcqIDBg_"
//                     },
//                     {
//                         "id": "711766",
//                         "name": "Arko",
//                         "role": "music",
//                         "image": "",
//                         "type": "artist",
//                         "perma_url": "https://www.jiosaavn.com/artist/arko-songs/ut1w0VmE6dg_"
//                     }
//                 ]
//             }
//         },
//         "button_tooltip_info": []
//     }
// ]

const SavedData = ({ result, type }: { result: dataInUserDataType[], type: string }) => {
    // {title, data}: {title: string, data: any}
    const [showAllData, setShowAllData] = useState(false)

    const slicedData = Array.isArray(result) && result.slice(0, showAllData ? result.length : 15)

    return (
        <div className='SavedData'>
            <h2>Saved {type}</h2>
            <div className="data">
                {
                    (Array.isArray(slicedData) && slicedData.length>0) ? (
                        slicedData.map((item: any) => (
                            <TrendingCards key={item.dataId} data={item} userData={true} />
                        ))
                    ) : (
                        <p className="noData">No {type} are saved.</p>
                    )
                }
            </div>
            <div className="load">
                {
                    (Array.isArray(slicedData) && slicedData.length>=15) && (
                        <button onClick={() => setShowAllData(prev => !prev)}>Load {showAllData ? 'Less' : 'More'}</button>
                    )
                }
            </div>

        </div>
    )
}

export default SavedData