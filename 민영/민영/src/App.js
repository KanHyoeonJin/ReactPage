import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./Main";

import CountryInfo from "./country/CountryInfo";

const Layout = () => {
  	return (
		<>
		<Navbar />
		<Outlet />
		<Footer />
		</>
  	);
};

const router = createBrowserRouter([
  {
	path: "/",
	element: <Layout />,
	children: [
	  {
		path: "/",
		element: <Main />,
	  },
		{
			path: "/country-info/:countryId",
			element: <CountryInfo />
		}
	],
  },
]);

function App() {
  return (
	<div className="App">
		<div className="container">
			<RouterProvider router={router} />
		</div>
	</div>
  );
}

export default App;
