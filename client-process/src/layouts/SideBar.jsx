import React from "react";
import "./SideBar.scss";
import expleoLogo from '../assets/expleo.webp';
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { FaPaperPlane } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdVolunteerActivism } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";


const SideBar=()=>{
            return(
                <div className="sidebar">
                 <div className="titlebar">
                    
                        <img src={expleoLogo} alt="expleo logo" className="titleLogo"/>
                         <span className="title">[Expleo Insurance]</span>
                   
                     
                    
                    </div>   
               
                <hr></hr>
                <ul className="menulist">
                    <li className="menu">
                        <AiFillHome className="menuIcons"/>Dashboard</li>
                    <li className="menu">
                        <MdAdminPanelSettings  className="menuIcons"/>Customer</li>
                    <li className="menu">
                        <MdHealthAndSafety  className="menuIcons"/>Policies</li>
                    <li className="menu">
                        <AiFillDatabase  className="menuIcons"/>Quotations</li>
                    <li className="menu">
                        <GrTransaction  className="menuIcons"/>Transactions</li>
                    <li className="menu">
                        <MdVolunteerActivism  className="menuIcons"/>Insurances</li>
                    <li className="menu">
                        <FaPaperPlane  className="menuIcons"/>Plans</li>
                    <li className="menu">
                        <FiActivity  className="menuIcons"/>Activity</li>
                    <li className="menu">
                        <IoSettingsOutline  className="menuIcons"/>Setting</li>
                    <li className="menu">
                        <CgProfile  className="menuIcons"/>Profile</li>
                    <li className="menu">
                        <RiQuestionAnswerFill  className="menuIcons"/>FAQ</li>
                </ul>
                <hr></hr>
               <div>
                <h4>Message</h4>
                <p>New messages</p>
               </div>

             
                </div>
            )
}
export default SideBar;