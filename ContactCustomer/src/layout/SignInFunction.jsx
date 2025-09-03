
import InputField from "../components/InputField.jsx";
import ButtonField from "../components/ButtonField.jsx";
import React from "react";

const SignInFunction=({usernameField,passwordField,signinButton,handleusername,handlepassword})=>{
 
    const glogo=require('../assets/Glogo.jpg')
    const Explogo=require('../assets/expleo.webp')
    return(
        <div>
 <div className="flex flex-col gap-4 px-4 ">
    <InputField  fieldType={"text"} id="email" name={usernameField} labelName={"username or Email"} placeholderName={"Username"} valueName={usernameField} onValueChange={handleusername}/>
    <InputField fieldType={"password"} id="Password" name={passwordField} labelName={"Password"} placeholderName={"Password"} valueName={passwordField} onValueChange={handlepassword}/>

    <div className="flex gap-1 lg:gap-2 m-2 md:pl-3 lg:pl-12 ">  
        <h1 className="font-serif text-black ">Are you want to sign in with </h1>
        <img alt="GoogleLogo" src={glogo} className="h-6 rounded-xl  "></img>  
        <img alt="GoogleLogo" src={Explogo} className="h-6 rounded-xl "></img>
    </div>
</div>
<ButtonField whileClick={signinButton} buttonName={"Sign In"} />
</div>
    )
}

export default SignInFunction;