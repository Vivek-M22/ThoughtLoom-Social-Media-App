/* eslint-disable react/prop-types */

// mechanims how we protect our pages , routes 
// also used in NEXT.JS

import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children , authentication = true }){

    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            // authstatus = false
            navigate("/login")
        }
        else if( !authentication && authStatus  !== authentication){
            // authstatus = true , false && false 
            navigate("/")
        }
        setLoader(false)
    } , [authStatus , navigate , authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}