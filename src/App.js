import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Blogs from './pages/education';
import Contact from './pages/courses';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/homepage' element={<Home/>} />
		<Route path='/education' element={<Blogs/>} />
		<Route path='/courses' element={<Contact/>} />
	</Routes>
	</Router>
);
}

export default App;

