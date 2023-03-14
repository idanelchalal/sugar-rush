import { useEffect, useState } from 'react'

const useToken = (Token) => {
    const token = JSON.parse(Token)
    const [isVerified, setIsVerified] = useState()
    useEffect(() => {
        const fetcher = async () => {
            if (!token) return false
            try {
                const res = await fetch(
                    process.env.REACT_APP_API + '/user/' + token.id,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                if (!res.ok) return setIsVerified({ verified: false, token })

                // FROM THIS POINT USER ID IS VERIFIED AND FOUND
                const { data } = await res.json()
                const tokenVerified = data.token === token.sessionToken
                setIsVerified({ verified: tokenVerified, token })
            } catch (err) {
                setIsVerified({ verified: false, token })
            }
        }
        fetcher()
    }, [])
    return isVerified
}
/**
 * @param  {{id, expirationDate, sessionToken}} Token [ID of the user, expirationDate in seconds]
 * @return {[{verified: boolean, Token}]}      True of False depends of the given Token
 */
const useAuth = (Token) => {
    return useToken(Token)
}

export default useAuth
