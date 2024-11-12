import { useState, useEffect } from 'react'
import { ResultsInDataType, top_artists } from '../App.types'

export const useFetch = (url: string) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean | string>(false)
    const [data, setData] = useState<ResultsInDataType[] | ResultsInDataType | top_artists[] | null>(null)

    useEffect(() => {

        const getData = async () => {
            try {
                setLoading(true);

                const req = await fetch(url)

                if (!req.ok) {
                    // Handle rate limiting specifically
                    if (req.status === 429) {
                        setError("Rate limit exceeded. Please try again later.");
                        // console.error();
                    } else {
                        // Handle other errors
                        setError(true);
                        // console.error(`Error: ${req.statusText}`);
                    }
                    setLoading(false);
                    return; // Exit the function early if there was an error
                }

                const res = await req.json()
                setData(res.data || res.top_artists || res)
                // || res.top_artists
                setLoading(false);

            } catch (error: any) {
                setLoading(false)
                setError(true)
            }
        }

        getData();

    }, [url])


    return { loading, error, data }
}