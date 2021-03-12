import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [request, setRequest] = useState({ loading: false, data: null, error: false })

    useEffect(() => {
        setRequest(request => { return { ...request, loading: true } })
        fetch(url)
            .then(res => res.json())
            .then(res => setRequest(request => { return { data:res, error:false, loading: false } }))
    }, [url])

    return request
}

export default useFetch