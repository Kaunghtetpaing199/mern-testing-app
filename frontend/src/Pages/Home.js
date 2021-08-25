import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("/books").then((res) => {
			setData(res.data);
		});
	}, [data]);
	return (
		<React.Fragment>
			<h1>Home Page</h1>
			{data.map((item, index) => (
				<div key={index}>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
				</div>
			))}
		</React.Fragment>
	);
};
export default Home;
