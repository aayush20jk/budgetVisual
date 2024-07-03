import React from "react";
import individualTransaction from "./individualTransaction.css";

function IndividualTransaction() {
    return (
        <div className="ind-tran">
            <div className="left-side">
                <h1 className="item-name">item</h1>
                <p className="date-time">time</p>
            </div>

            <div className="right-side">
                <h1 className="amt">amount</h1>
            </div>
        </div>
    )
}

export default IndividualTransaction;