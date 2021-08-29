import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Container>
				<Typography variant="subtitle1" align="center" component="p">
					<a
						href="https://github.com/Geevaveeri"
						style={{ textDecoration: "none", color: "black" }}
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/rosecasey/"
						style={{ padding: "10px", textDecoration: "none", color: "black" }}
					>
						LinkedIn
					</a>
				</Typography>
			</Container>
		</footer>
	);
}

Footer.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
};
