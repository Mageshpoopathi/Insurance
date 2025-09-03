import React from "react";

const InputField=({fieldType,labelName,placeholderName,valueName,onValueChange})=>{
    return(
        <div className="text-left">
  <label className="block mb-1 text-md font-serif text-black">{labelName}</label>
  <input
    type={fieldType}
    className="bg-purple-600 w-full p-2 rounded-md shadow-inner text-white "
    placeholder={placeholderName}
    name={valueName}
    onChange={(e)=>onValueChange(e.target.value)}
  />
</div>
    )
}
export default InputField;