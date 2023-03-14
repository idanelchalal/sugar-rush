import { useState, useEffect } from 'react'
/*
    

*/

const useFetch = (URI, ReqObject = {}) => {
    // Body is provided? => Will be included as stringified object in the request object.
    const bodyObject = ReqObject.body ? JSON.stringify(ReqObject.body) : null
    const defaultRequestObject = {
        headers: ReqObject.headers
            ? ReqObject.headers
            : {
                  'Content-Type': 'application/json',
              },
        credentials: ReqObject.credentials
            ? ReqObject.credentials
            : 'same-origin',
        method: ReqObject.method ? ReqObject.method : 'GET',
        bodyObject,
    }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        const dataFetch = async () => {
            try {
                setLoading(true)
                const response = await fetch(URI, defaultRequestObject)
                const data = await response.json()
                if (!response.ok) {
                    const error = response.statusText
                    throw error
                }
                setData(data)
            } catch (err) {
                setError({ error: true, message: err })
            } finally {
                setLoading(false)
            }
        }
        dataFetch()
    }, [])

    return { data, error, loading }
}
export default useFetch
