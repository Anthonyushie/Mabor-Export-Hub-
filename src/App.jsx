/** @format */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Root from "./layouts/Root";
import { About, Contact, Home } from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</>,
		),
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
