import '@fontsource/lobster';
import '@fontsource-variable/inter'; // Supports weights 100-900
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryListing from './components/CategoryListing';
import RecipeListing from './components/RecipeListing';
import CallToAction from './components/CallToAction';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
	return (
		<div className='px-5'>
			<Navbar />
			<Hero />
			<CategoryListing />
			<RecipeListing />
			<CallToAction />
			<RecipeListing secondary />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default App;
