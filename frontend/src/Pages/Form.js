import axios from "axios";
import React, { useState } from "react";
import { Redirect, useParams } from "react-router";

const Form = (props) => {
	const [name, setName] = useState(props.data !== [] ? props.data.name : "");
	const [description, setDescription] = useState("");
	const [isSucced, setSuccess] = useState(false);
	let { slug } = useParams();

	const submit = (e) => {
		e.preventDefault();
		if (props.type === "create") {
			axios
				.post("/books/new", { name, description })
				.then((res) => setSuccess(true))
				.catch(() => alert("Failed uploading data"));
		}
		if (props.type === "update") {
			axios
				.patch(`/books/${slug}`, { name, description })
				.then((res) => {
					setSuccess(true);
				})
				.catch((err) => console.log(err.message));
		}

		setName("");
		setDescription("");
	};
	return (
		<React.Fragment>
			{isSucced ? (
				<Redirect to='/' />
			) : (
				<form onSubmit={submit}>
					<h2>Please, Tell us about you</h2>
					<input
						type='text'
						value={name}
						placeholder='Please enter book name'
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='text'
						value={description}
						placeholder='Please enter more detail'
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button type='submit'>Submit</button>
				</form>
			)}
		</React.Fragment>
	);
};

export default Form;
