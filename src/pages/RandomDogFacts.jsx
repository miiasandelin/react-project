import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { FactComponent } from '../components/fact.jsx'

export const RandomDogFacts = () => {

	const [Facts, setFacts] = useState();
	const APIURL = "https://dog-api.kinduff.com/api/facts?number="
	const [Number, setNumber] = useState(3);

	useEffect(() => {
		axios.get(APIURL + Number).then((response) => {
			setFacts(response.data["facts"])
		});
	}, [])



	return (
		<div>
			{Facts?.map((fact) => {
				return (
					<div>
						<FactComponent line={fact}/>
					</div>
				)
			})}
		</div>
	)
}
