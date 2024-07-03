import React, { useState } from "react";
import "./inputbar.css";
import expenditures from "./record";

function Inputbar() {   
    const [categoryName, setCategoryName] = useState("");
    const [itemName, setItemName] = useState("");
    const [amt, setAmt] = useState("");

    function handleCategory(event) {
        setCategoryName(event.target.value);
    }

    function handleItemName(event) {
        setItemName(event.target.value);
    }

    function handleAmt(event) {
        setAmt(event.target.value);
    }

    function addRecord() {
        // does not work like this , need to use api and backend
        let lastId = expenditures.length > 0 ? expenditures[expenditures.length - 1].id : 0;
        let newRecord = {
            id: lastId + 1,
            category: categoryName,
            item: itemName,
            amount: amt
        };
        expenditures.push(newRecord);
    }
    
    return (
        <div className="inputBar">
            <form className="formInput">
                <select className="category" value={categoryName} onChange={handleCategory}>
                    <option value="" disabled>
                        -- Category --
                    </option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills</option>
                    <option value="others">Others</option>
                </select>
                <input className="itemName" value={itemName} onChange={handleItemName} type="text" placeholder="What you spend on ?"/>
                <input className="amount" value={amt} onChange={handleAmt} type="text" placeholder="Rs."/>
                <button className="submit" onClick={addRecord} type="button">Add</button>
            </form>
        </div>
    );
}

export default Inputbar;
