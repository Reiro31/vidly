import React, { Component } from 'react';

const Like = props => {
     let classes = "fa fa-heart-o"; 
    if(props.liked) classes ="fa fa-heart";
    return (<i className={classes} onClick={props.onClick} style={{cursor:'pointer'}}></i>);
}
 
export default Like;