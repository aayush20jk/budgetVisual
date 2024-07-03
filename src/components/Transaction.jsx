import React from "react";
import IndividualTransaction from "./IndividualTransaction";
import transaction from './transaction.css'

function Transaction() {
    return (
        <div className="transaction-container">
            <div className="header">
                <div className="transaction-heading"><h1>transaction</h1></div>
                <div className="link-to-all-transaction"></div>
            </div>

            <hr style={{height:'1px', background:'white', margin:'10px auto', width:'50%'}}/>

            <IndividualTransaction />
        </div>
    )
}

export default Transaction