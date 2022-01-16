import React from "react";
import GroupCard from "./GroupCard";

const GroupList = (props) => {
    console.log(props);

    const groups = [
        {
            name: "Food",
            type: "Group",
            link: "https://github.com/advikak/group-finder",
        },
    ];
    
    const renderGroupList = groups.map((group) => {
        return (
            <GroupCard group={group}></GroupCard>
    

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