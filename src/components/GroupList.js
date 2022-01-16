import React from "react";
import {Link} from "react-router-dom";
import GroupCard from "./GroupCard";

const GroupList = (props) => {
    console.log(props);

        const deleteGroupHandler = (name) => {
            props.getGroupName(name);
        };
        
    // const groups = [
    //     {
    //     name: "AMS",
    //     type: "Club",
    //     url: "https://portal.nwplus.io/projects",
    //     },
    // ];
    const renderGroupList = props.groups.map((group) => {
        return (
            <GroupCard group={group}
             clickHandler = {deleteGroupHandler} 
             key = {group.name}
             />
        );
    });

    return <div className = "celled list"> 
        {renderGroupList}
    </div>

        // TODO FINISH
        // <div className = "ui search">
        //     <div className=" = "ui icon input">
        //     <input type = "text" placeholder="Search Groups" className="prompt"/>
        //     <i className="search icon"> </i>
        //     </div>
        // </div>
};


export default GroupList;