import React from 'react'
import Axios from 'axios'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import cookies from 'js-cookie'
import { AuthContext } from '../context/AuthProvider'


const UserPersistance = () => {
    const session = cookies.get('browsingSession')
    const { authUser, setAuthUser } = useContext(AuthContext)
    console.log("authUser", authUser);
    const isLoginUserURI = `https://raku-honyaku-web.onrender.com/api/auth`
    useEffect(() => {
        async function fetchUserId() {
            const response = await Axios.get(isLoginUserURI)
            console.log(response)
            const userID = response.data.userId ?? null
            setAuthUser(userID) 
            
        }
        fetchUserId()
    }, [setAuthUser])

    return (
        <>
            {(session !== undefined)  ? <Outlet /> : <Navigate to='/login' replace={true}/>}
        </>
        
    )
}

export default UserPersistance
