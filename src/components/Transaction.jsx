import React from "react";
import IndividualTransaction from "./IndividualTransaction";

function Transaction() {
    return (
        <div className="transaction-container">
            <div className="header">
                <div className="transaction-heading"><h1>transaction</h1></div>
                <div className="link-to-all-transaction"></div>
            </div>

            <IndividualTransaction />
        </div>
    )
}

export default Transaction