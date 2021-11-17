import React from 'react';
import { ConfigProvider } from "antd";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import List from './pages/List/index';
import logo from "./assets/images/logo.svg";
import "./App.css";

function App() {
	return (
		<ConfigProvider direction="rtl">
			<div className="container">
				<div className="text-center">
					<img src={logo} alt="Asroon Metal" />
				</div>
				<Router>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/List" element={<List />} />
						<Route path="/Show-List" element={<List />} />
						<Route path="/Edit" element={<Edit />} />
					</Routes>
				</Router>
			</div>
		</ConfigProvider >
	);
}

export default App;
