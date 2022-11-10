import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';


function App() {
		return (
		<Router>
			<Routes>
				<Route path='/homepage' element={<Home/>} />
			</Routes>
			</Router>
		);
}

export default App;

