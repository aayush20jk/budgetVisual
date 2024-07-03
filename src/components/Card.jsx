import React from "react";
import './card.css'

function Card(props) {
    return (
        <div className="amount-card">
            <div className="cat"><h3 style={{fontSize:'14px', color:'#007bff', fontWeight:'normal'}}>{props.category}</h3></div>
            <div className="it"><h2 style={{fontSize:'20px'}}>{props.itemName}</h2></div>
            <div className="it-amt"><h1 style={{fontSize:'24px', color:'#007bff'}}>Rs. {props.amount}</h1></div>
        </div>
    )
}

export default Card;