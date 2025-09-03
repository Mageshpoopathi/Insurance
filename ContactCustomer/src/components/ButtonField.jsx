import React from "react";

const ButtonField=({whileClick,buttonName})=>{
    return(
        <button className="h-10 w-28 mt-6 px-6 py-2 rounded-md hover:bg-black  bg-purple-700 text-white transition duration-300 shadow-lg font-serif"
        onClick={whileClick}
        >
{buttonName}
</button> 
    )
}
export default ButtonField;