import React from "react"
import "./App.css"
import Inputbar from "./Inputbar"
import Transaction from "./Transaction"
import Totalbalance from "./Totalbalance"

function App() {

  return (
    <div className="app">
      <Inputbar />
      <Transaction />
      <Totalbalance />
    </div>
  )
}

export default App