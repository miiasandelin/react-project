import { Routes, Route } from 'react-router-dom'
import './App.css'
import { RandomDogFacts } from './pages/RandomDogFacts'

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
