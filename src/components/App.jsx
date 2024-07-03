import React from "react"
import "./App.css"
import Inputbar from "./Inputbar"
import Card from "./Card"
import expenditures from "./record"

function App() {
  function something() {
    let newRecord = {
        id: 1,
        category: "categoryName",
        item: "itemName",
        amount: "amt"
    };
    expenditures.push(newRecord)
  }

  return (
    <div className="app">
      <Inputbar />
      {expenditures.map((items) => <Card category={items.category} itemName={items.item} amount={items.amount} />)}
    </div>
  )
}

export default App