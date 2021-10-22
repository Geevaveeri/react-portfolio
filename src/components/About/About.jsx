import React from "react";
import { Box, Typography, Grid, Paper } from "@material-ui/core";

const About = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			alignContent="center"
		>
			<Box textAlign="center" m={3} mx="auto">
				<Typography variant="h4">About Me</Typography>
				<br />

				<img
					style={{
						alignSelf: "center",
						height: 200,
						width: 150,
						borderWidth: 1,
						borderRadius: 75,
					}}
					src={require("../../assets/images/Selfie.jpg").default}
					alt="Casey Rose"
				/>

				<Paper elevation={3} style={{ width: "50%", margin: "auto" }}>
					<Typography variant="body2" color="textSecondary" component="p">
						Full-Stack Developer from the University of Utah Full-Stack Web
						Development bootcamp, with a background in live video production and
						TV broadcasting Offering a strong educational foundation in front
						end and back end production environments. With experience in group
						based coding environments, I am willing to work hard to further my
						production knowledge. while contributing to the success of your
						company. I believe these attributes would be a great addition to
						your team and an overall asset to your organization. I look forward
						to the opportunity of using my skills and strengths in the business.
						<br />
						<br />
					</Typography>
				</Paper>
			</Box>
		</Grid>
	);
};

export default About;
