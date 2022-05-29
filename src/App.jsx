import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Private from "./components/Private";
import Register from "./components/Register";
import Container from "./components/Container";
import UserArticles from "./components/UserArticles";
import Settings from "./components/Settings";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";



function App() {

	return (
		<div className="app">
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Private><Container/></Private>}/>
				<Route exact path="/user" element={<Private> <UserArticles/> </Private>}/>
				<Route exact path="/settings" element={<Private> <Settings/> </Private>}/>
				<Route exact path="/add" element={<Private> <AddArticle/> </Private>}/>
				<Route exact path="/edit/:id" element={<Private> <EditArticle/> </Private>}/>
				<Route exact path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>

			</Routes>
		</div>
	);
}

export default App;
