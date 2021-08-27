import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("/books").then((res) => {
			setData(res.data);
		});
	}, [data]);

	const delteBtn = (id) => {
		return axios
			.delete(`/books/${id}`, { data: "success" })
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.message));
	};
	return (
		<React.Fragment>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link to='/shop'>Shop</Link>
				</li>
				<li>
					<Link to='/create'>Create New Book</Link>
				</li>
			</ul>

			{data.map((item, index) => (
				<div key={index}>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<button onClick={() => delteBtn(item._id)}>Delete</button>
					<button>
						<Link to={`/update/${item._id}`}>Edit</Link>
					</button>
				</div>
			))}
		</React.Fragment>
	);
};
export default Home;
