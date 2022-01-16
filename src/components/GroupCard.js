import React from "react";

const GroupCard = (props) => {
    const {name, type, link} = props.group
    return (
        <div className = "item" style={{marginTop: "40px"}} >
        <div className = "content">
            <div className = "header">{name}</div>
            <div>{type} </div>
            <div>{link}</div>
            </div>
    <i className = "trash icon"
    style={{color: "red", marginTop: "7px" }}
    onClick = {() => props.clickHandler(name)}
    ></i>
    {/* // TODO: INSERT LINK TO PATHWAY */}
    <i className = "edit icon"
    style={{color: "blue"}}
    ></i>
    </div >
    );
};

export default GroupCard;