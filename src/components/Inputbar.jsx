import React, { useState } from "react";
import "./inputbar.css";

function Inputbar() {   
    return (
        <div className="inputBar">
            <form className="formInput">
                <select className="category" value={""} onChange={"handleCategory"}>
                    <option value="" disabled>
                        -- Category --
                    </option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills</option>
                    <option value="others">Others</option>
                </select>
                <input className="itemName" value={""} onChange={"handleItemName"} type="text" placeholder="What you spend on ?"/>
                <input className="amount" value={""} onChange={"handleAmt"} type="text" placeholder="Rs."/>
                <button className="submit" onClick={"addRecord"} type="button">Add</button>
            </form>
        </div>
    );
}

export default Inputbar;
