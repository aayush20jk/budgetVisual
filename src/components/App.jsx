import React from "react"
import "./App.css"
import Inputbar from "./Inputbar"
import Card from "./Card"
import expenditures from "./record"

function App() {
  return (
    <div className="app">
      <Inputbar />
      {expenditures.map((items) => <Card category={items.category} itemName={items.item} amount={items.amount} />)}
    </div>
  )
}

export default App