import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},
	demo: {
		//	backgroundColor: "#424242",
		//	color: "#fff",
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			alignContent="center"
		>
			<div>
				<h1>Resume</h1>
				<h3>
					Download:
					<a href="https://drive.google.com/file/d/197Vu9wnj6_LOIiYZEeOwShJ_WeQ4rTHL/view?usp=sharing">
						Resume
					</a>
				</h3>
				<Paper elevation={4} style={{ width: "120%", margin: "auto" }}>
					<List className={classes.demo}>
						<h1>Front-End Proficiencies</h1>
						<ListItem>HTML5</ListItem>
						<ListItem>CSS3</ListItem>
						<ListItem>Javascript</ListItem>
						<ListItem>JQuery</ListItem>
						<ListItem>Responsive Design</ListItem>
						<ListItem>React</ListItem>
						<ListItem>Bootstrap</ListItem>
					</List>
					<List className={classes.demo}>
						<h1>Back-End Proficiencies</h1>
						<ListItem>APIs</ListItem>
						<ListItem>Node</ListItem>
						<ListItem>Express</ListItem>
						<ListItem>MySQL, Sequelize</ListItem>
						<ListItem>NoSQL, MongoDB</ListItem>
						<ListItem>PWA</ListItem>
					</List>
				</Paper>
			</div>
		</Grid>
	);
};

export default Resume;
