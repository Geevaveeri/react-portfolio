import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	toolbar: {
		flexWrap: "wrap",
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
		color: "#ffffff",
		"&:hover": {
			color: "#000000",
			textDecoration: "#000000",
		},
		"&:focus": {
			color: "#3cb027",
		},
	},
}));

const Nav = props => {
	const classes = useStyles();

	const {
		setCurrentCategory,
		contactSelected,
		currentCategory,
		setContactSelected,
	} = props;

	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<AppBar position="static" elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h4" noWrap className={classes.toolbarTitle}>
					Casey Rose
				</Typography>
				<nav>
					<Link
						variant="button"
						href="#about"
						className={`${classes.link} ${!contactSelected && "navActive"}`}
						onClick={() => {
							setContactSelected(false);
							setCurrentCategory("About Me");
						}}
					>
						About Me
					</Link>
					<Link
						variant="button"
						href="#portfolio"
						className={`${classes.link} ${!contactSelected && "navActive"}`}
						onClick={() => {
							setContactSelected(false);
							setCurrentCategory("Portfolio");
						}}
					>
						Portfolio
					</Link>
					<Link
						variant="button"
						href="#contact"
						className={`${classes.link} ${contactSelected && "navActive"} `}
						onClick={() => {
							setContactSelected(false);
							setCurrentCategory("Contact Me");
						}}
					>
// 						Contact Me
// 					</Link>
// 					<Link
// 						variant="button"
// 						href="#resume"
// 						className={`${classes.link} ${contactSelected && "navActive"}`}
// 						onClick={() => {
// 							setContactSelected(false);
// 							setCurrentCategory("Resume");
// 						}}
// 					>
						Resume
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
