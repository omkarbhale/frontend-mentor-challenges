import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import { QRCodeComponent, ResultsSummaryComponent } from "./challenges";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/frontend-mentor-challenges" element={<Home />} />
				<Route
					path="/frontend-mentor-challenges/challenges/qr_code_component"
					element={<QRCodeComponent />}
				/>
				<Route
					path="/frontend-mentor-challenges/challenges/results_summary_component"
					element={<ResultsSummaryComponent />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
