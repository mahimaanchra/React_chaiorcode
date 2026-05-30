import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();
    return(
        <div className="flex justify-center bg-gray-700 h-6 text-white">User : {userid}</div>
    )
}

export default User;