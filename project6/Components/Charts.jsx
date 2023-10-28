import React, { useState, useEffect } from "react"
import axios from "axios"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts"

const ACCESS_KEY = import.meta.env.ACCESS_KEY

export default function Charts() {
	const [breweries, setBreweries] = useState(null)

	useEffect(() => {
		axios
			.get(`https://api.openbrewerydb.org/breweries?access_token=${ACCESS_KEY}`)
			.then(response => {
				setBreweries(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])

	if (!breweries) {
		return <div>Loading...</div>
	}

	const data = Object.values(
		breweries.reduce((acc, brewery) => {
			if (acc[brewery.state]) {
				acc[brewery.state].value++
			} else {
				acc[brewery.state] = { name: brewery.state, value: 1 }
			}
			return acc
		}, {})
	)

	return (
		<div>
			<h2>Number of Breweries by State</h2>
			<BarChart width={600} height={300} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>
		</div>
	)
}
