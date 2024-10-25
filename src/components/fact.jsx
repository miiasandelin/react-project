import React from 'react'
import "./css/fact.css"

export const FactComponent = (props) => {
  return (
	<div className="FactWrapper">
		<p className="FactLine">{props.line}</p>
	</div>
  )
}
