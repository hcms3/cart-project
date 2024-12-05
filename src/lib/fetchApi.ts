import { useEffect, useState } from "react"

export function fetchApi(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const dataResults = async (url) => {
        const response = await fetch(url);
        const json = await response.json();

        setLoading(true)
        setData(json)
    }

    useEffect(() => {
        dataResults(url)
    }, [url])

    return { data, loading }
}