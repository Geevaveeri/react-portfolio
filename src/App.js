import "./App.css";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Nav from "./components/Nav";
import About from "./components/About";
import Portolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const theme = createTheme({
	palette: {
		primary: {
			main: "#9b27af",
			light: "#cf5ce2",
			dark: "#69007f",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#3cb027",
			light: "#74e359",
			dark: "#007f00",
			contrastText: "#000000",
		},
	},
});

function App() {
	const [currentCategory, setCurrentCategory] = useState("About Me");

	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div className="main-container">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Nav
					setCurrentCategory={setCurrentCategory}
					currentCategory={currentCategory}
					contactSelected={contactSelected}
					setContactSelected={setContactSelected}
				/>
				<main>
					{currentCategory === "About Me" && <About></About>}
					{currentCategory === "Portfolio" && <Portolio></Portolio>}
					{currentCategory === "Contact Me" && <Contact></Contact>}
					{currentCategory === "Resume" && <Resume></Resume>}
				</main>
				<Footer></Footer>
			</ThemeProvider>
		</div>
	);
}

export default App;
