import Blog from './Components/Blog/Blog.jsx';
import Consulting from './Components/Consulting/Consulting.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import PopularProducts from './Components/PopularProducts/PopularProducts.jsx';
import ProductsCategory from './Components/ProductsCategory/ProductsCategory.jsx';
import Providers from './Components/Providers/Providers.jsx';
import PurchasingSteps from './Components/PurchasingSteps/PurchasingSteps.jsx';
import 'swiper/css';
import 'swiper/css/grid';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<ProductsCategory />
			<PurchasingSteps />
			<PopularProducts />
			<Consulting />
			<Providers />
			<Blog />
			<Footer />
		</>
	);
}

export default App;
