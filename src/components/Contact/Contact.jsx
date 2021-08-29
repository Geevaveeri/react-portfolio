import React, { useState } from "react";
import { Grid, Button, InputLabel, TextField } from "@material-ui/core";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	const handleSubmit = e => {
		e.preventDefault();
		if (!errorMessage) {
			console.log("Submit Form", formState);
		}
	};

	const handleChange = e => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
			console.log("Handle Form", formState);
		}
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			alignContent="center"
		>
			<section>
				<h1 data-testid="h1tag">Contact me</h1>
				{/* <form id="contact-form" onSubmit={handleSubmit}>
					<div>
						<InputLabel htmlFor="name">Name:</InputLabel>
						<TextField
							id="outlined-basic"
							variant="outlined"
							type="text"
							name="name"
							defaultValue={name}
							onBlur={handleChange}
						/>
					</div>
					<div>
						<InputLabel htmlFor="email">Email address:</InputLabel>
						<TextField
							id="outlined-basic"
							variant="outlined"
							type="email"
							name="email"
							defaultValue={email}
							onBlur={handleChange}
						/>
					</div>
					<div>
						<InputLabel htmlFor="message">Message:</InputLabel>
						<TextField
							style={{ width: "500px" }}
							id="outlined-multiline-static"
							name="message"
							rows="5"
							defaultValue={message}
							onBlur={handleChange}
							multiline
							variant="outlined"
							size="medium"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<Button
						data-testid="button"
						type="submit"
						color="primary"
						variant="contained"
					>
						Submit
					</Button>
				</form> */}
				Please contact me at cbr_me@yahoo.com, or one of the platforms in my
				footer! Thank you!
			</section>
		</Grid>
	);
}

export default ContactForm;
