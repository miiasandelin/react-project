import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

export const RandomDogFacts = () => {

	const [Facts, setFacts] = useState();
	const APIURL = "https://dog-api.kinduff.com/api/facts?number=5"

	useEffect(() => {
		axios.get(APIURL).then((response) => {
			setFacts(response.data["facts"])
		});
	}, [])



	return (
		<div>
			{Facts?.map((fact) => {
				return (
					<div>
						{fact}
					</div>
				)
			})}
		</div>
	)
}
