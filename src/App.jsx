import './App.css'
import { RandomDogFacts } from './pages/RandomDogFacts'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
	<>
	<Routes>
		<Route path="/" element={<RandomDogFacts/>}></Route>
	</Routes>

	</>
  )
}

export default App
