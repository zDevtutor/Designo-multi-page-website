import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import WebDesign from './pages/WebDesign';
import Locations from './pages/locations';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/app-design' element={<AppDesign />} />
				<Route path='/graphic-design' element={<GraphicDesign />} />
				<Route path='/web-design' element={<WebDesign />} />
				<Route path='/locations' element={<Locations />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
