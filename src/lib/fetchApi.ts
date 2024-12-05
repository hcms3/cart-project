import { useEffect, useState } from "react"

export function fetchApi(url) {
    const [data, setData] = useState([]);

    const dataResults = async (url) => {
        const response = await fetch(url);
        const json = await response.json();

        setData(json)
    }

    useEffect(() => {
        dataResults(url)
    }, [url])

    return { data }
}