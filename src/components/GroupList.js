import React from "react";
import GroupCard from "./GroupCard";

const GroupList = (props) => {
    console.log(props);

        const deleteGroupHandler = (name) => {
            props.getGroupName(name);
        };

    // const groups = [
    //     {
    //         name: "Food",
    //         type: "Group",
    //         link: "https://github.com/advikak/group-finder",
    //     },
    // ];
    
    const renderGroupList = props.groups.map((group) => {
        return (
            <GroupCard group={group}
             clickHandler = {deleteGroupHandler} 
             key = {group.name}
             />
    
            // <div className = "item">
            //     <div className = "content">
            //         <div className = "header">{group.name}</div>
            //         <div>{group.type}</div>
            //         <div>{group.link}</div>
            // </div>
            // <i className = "trash icon"></i>
            // </div>
        );
    });

    return <div className = "celled list">
        {renderGroupList}
    </div>
};


export default GroupList;