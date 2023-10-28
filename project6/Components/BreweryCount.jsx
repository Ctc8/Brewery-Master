import React from "react"

const BreweryCount = ({ totalBreweries }) => {
	return (
        <div className="brewery-count-container">
            <p className="brewery-count">Displayed Brewery Count: {totalBreweries}</p>
        </div>
    )
}

export default BreweryCount
