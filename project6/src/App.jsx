import React from "react"
import Breweries from "../Components/Breweries"
import BreweryDetails from "../Components/BreweryDetails"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
	return (
			<BrowserRouter>
      <div>
      <Routes>
					<Route path="/" element={<Breweries/>} />
					<Route path="/breweries/:id" element={<BreweryDetails/>} />
				</Routes>
      </div>
			</BrowserRouter>
	)
}

export default App
