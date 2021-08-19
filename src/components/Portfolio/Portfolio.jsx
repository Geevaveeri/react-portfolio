import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import { Paper, Button, Grid, Box } from "@material-ui/core";
import "../Portfolio/portfolio.scss";
import blog from "../../assets/images/Blog.PNG";
import tracker from "../../assets/images/Employee-tracker.PNG";
import sellers from "../../assets/images/The-Best-Sellers.jpg";
import social from "../../assets/images/social-network.PNG";
import budget from "../../assets/images/PWA-Challenge.PNG";
import forked from "../../assets/images/git-forked.PNG";

function Project(props) {
	return (
		<Paper
			className="Project"
			style={{
				backgroundImage: "url(" + props.item.img + ")",
				backgroundColor: "black",
			}}
			elevation={10}
		>
			<h2 style={{ color: props.item.txtColor }}>{props.item.name}</h2>
			<h4 style={{ color: props.item.txtColor }}>{props.item.description}</h4>

			<Button
				className="CheckButton"
				href={props.item.site}
				style={{
					color: props.item.txtColor,
					border: "3px solid " + props.item.txtColor,
				}}
			>
				Project Site
			</Button>
			<Button
				className="CheckButton"
				href={props.item.repo}
				style={{
					color: props.item.txtColor,
					border: "3px solid " + props.item.txtColor,
				}}
			>
				Project Repo
			</Button>
		</Paper>
	);
}

const items = [
	{
		name: "On The Road",
		description: "On The Road, or as we like to call it OTR, is the one stop shop for your road trip needs. With OTR, you can create a road trip dashboard to store all of the necessities for your road trip.",
		img: blog,
		site: "https://ontheroadapp.herokuapp.com/",
		repo: "https://github.com/Geevaveeri/OnTheRoad",
		txtColor: "#000000",
	},
	{
		name: "MVC Blog",
		description: "A blog I made using the Model, View, Controller method.",
		img: blog,
		site: "https://mvc-challenge.herokuapp.com/",
		repo: "https://github.com/Geevaveeri/Model-View-Controller-Challenge",
		txtColor: "#000000",
	},
	{
		name: "Employee Tracker",
		description:
			"A command line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
		img: tracker,
		site: "https://github.com/Geevaveeri/Employee-Tracker",
		repo: "https://github.com/Geevaveeri/Employee-Tracker",
		txtColor: "#ffffff",
	},
	{
		name: "The Best Sellers",
		description:
			"The user select one of several current bestsellers lists from the New York Times bestsellers lists and displays the top 6 books in those catagories",
		img: sellers,
		site: "https://geevaveeri.github.io/the-best-sellers/",
		repo: "https://github.com/Geevaveeri/the-best-sellers",
		txtColor: "#cf5ce2",
	},
	{
		name: "Social Network API",
		description:
			"An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
		img: social,
		site: "https://www.youtube.com/watch?v=LB5rPG9yBfg",
		repo: "https://github.com/Geevaveeri/NoSQL-Challenge-Social-Network-API",
		txtColor: "#ffffff",
	},
	{
		name: "Budget Tracker",
		description:
			"Budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection.",
		img: budget,
		site: "https://progressive-web-app--challenge.herokuapp.com/",
		repo: "https://github.com/Geevaveeri/Progressive-Web-Applications-Challenge",
	},
	{
		name: "Git Forked",
		description:
			"A website to find and save restaurants you are interested in eating at.",
		img: forked,
		site: "https://git-forked.herokuapp.com/",
		repo: "https://github.com/Geevaveeri/git-forked",
	},
];

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			autoPlay: true,
			animation: "fade",
			indicators: true,
			timeout: 500,
			navButtonsAlwaysVisible: false,
			navButtonsAlwaysInvisible: false,
		};

		autoBind(this);
	}

	render() {
		return (
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
			>
				<Box textAlign="center" m={3} mx="auto">
					<div style={{ marginTop: "50px", color: "#494949" }}>
						<h2>Casey Rose Projects</h2>
						<Carousel
							className="SecondExample"
							autoPlay={this.state.autoPlay}
							animation={this.state.animation}
							indicators={this.state.indicators}
							timeout={this.state.timeout}
							navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
							navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
						>
							{items.map((item, index) => {
								return <Project item={item} key={index} />;
							})}
						</Carousel>
					</div>
				</Box>
			</Grid>
		);
	}
}
