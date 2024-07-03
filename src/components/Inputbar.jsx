import React from "react";
import "./inputbar.css"

function Inputbar() {   
    return (
        <div className="inputBar">
            <form className="formInput">
                <select value={""} onChange={""} className="category">
                    <option value="" disabled>
                        -- Category --
                    </option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills</option>
                    <option value="others">Others</option>
                </select>
                <input className = "itemName" type="text" placeholder="What you spend on ?"/>
                <input className = "amount" type="text" placeholder="Rs."/>
                <button className = "submit" type="button">Add</button>
            </form>
        </div>
    )
}

export default Inputbar