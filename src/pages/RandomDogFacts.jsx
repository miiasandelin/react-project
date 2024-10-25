import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { FactComponent } from '../components/fact.jsx'
import "./css/RandomDogFacts.css"

export const RandomDogFacts = () => {

	const [Facts, setFacts] = useState();
	const APIURL = "https://dog-api.kinduff.com/api/facts?number="
	const [Number, setNumber] = useState(3);

	useEffect(() => {
		axios.get(APIURL + Number).then((response) => {
			setFacts(response.data["facts"])
		});
	}, [Number])

	const handleNumberInput = (event) => {
		const val = event.target.value;
		setNumber(val);
	};

	var child = 0;

	return (
		<div>
			<div className="sliderWrapper">
				<h2>{Number} dog fact{Number === '1' ? null: 's'}</h2>
                <input
					className="slider"
					type="range"
					min={1}
					max={10}
					value={Number}
					onChange={handleNumberInput}
				/>
			</div>
			<div>
				{Facts?.map((fact) => {
					child++;
					return (
						<div key={child}>
							<FactComponent line={fact} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
