import { useState, useEffect } from "react"

export default function useUserLogin() {

    let [userLogin, setuserLogin] = useState(false)
    useEffect(() => {

        let getUser = localStorage.getItem('user')
        setuserLogin(!!getUser)

    }, [])

    return userLogin
}







