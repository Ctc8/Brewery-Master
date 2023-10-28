import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ACCESS_KEY = import.meta.env.ACCESS_KEY

function BreweryDetails() {
	const { id } = useParams()
	const [brewery, setBrewery] = useState(null)

	useEffect(() => {
		axios
			.get(
				`https://api.openbrewerydb.org/breweries/${id}?access_token=${ACCESS_KEY}`
			)
			.then(response => {
				setBrewery(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [id])

	if (!brewery) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h2>{brewery.name}</h2>
			<p>Address: {brewery.street}</p>
			<p>
				Location: {brewery.city}, {brewery.state} {brewery.postal_code}
			</p>
			<p>Phone number: {brewery.phone}</p>
			<p>
				Website URL:
				<a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
					{brewery.website_url}
				</a>
			</p>
			<Link to="/">Back to main list</Link>
		</div>
	)
}

export default BreweryDetails
