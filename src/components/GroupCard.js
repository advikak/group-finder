import React from "react";

const GroupCard = (props) => {
    const {name, type, link} = props.group
    return (
        <div className = "item" >
        <div className = "content">
            <div className = "header">{name}</div>
            <div>{type}</div>
            <div>{link}</div>
            </div>
    <i className = "trash icon"></i>
    </div >
    );
};

export default GroupCard;