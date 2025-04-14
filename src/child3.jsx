import React, { use, useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import { Tab, Tabs } from "@mui/material";
import { userContext } from "./child1";
const Child3 = (prop) => {
  const user = useContext(userContext)
  const [activeTab, setactiveTab] = useState(1)
  const [value, setValue] = useState(0);
  const handleTab = (i) => {
    setactiveTab(i)
  }
  console.log("Child3 rendered")
  return (
    <>
      <h2>Child3</h2>
      <div style={{ border: "1px solid" }} >
        <div style={{ backgroundColor: "rgba(211, 211, 211, 0.377)" }}>
          <button onClick={() => handleTab(1)} className={`tablink ${activeTab === 1 && "active"}`}>Tab 1</button>
          <button onClick={() => handleTab(2)} className={`tablink ${activeTab === 2 && "active"}`}>Tab 2</button>
          <button onClick={() => handleTab(3)} className={`tablink ${activeTab === 3 && "active"}`}>Tab 3</button>
        </div>
        <div className="tabcontent">
          Tab {activeTab} is active
        </div>
      </div>
      <Tabs value={value} onChange={(e, newvalue) => setValue(newvalue)}>
        <Tab label="tab1"></Tab>
        <Tab label="tab2" ></Tab>
        <Tab label="tab3"></Tab>
      </Tabs>
      <h1>{user}</h1>
    </>
  )
}
export default Child3;