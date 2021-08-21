import React from "react";

const Home = (props) => {
	return (
		<React.Fragment>
			<h1>Home Page</h1>

			<form>
				<input placeholder='Book Name' type='text' />
				<tr />
				<input placeholder='Page Count' type='number' />
				<tr />
				<textarea placeholder='Massage' />
				<tr />
				<button type='submit'> Submit</button>
			</form>
		</React.Fragment>
	);
};
export default Home;
