import React, { useState, useEffect } from "react";
import Form from "./Form";
import { useParams } from "react-router";
import axios from "axios";
const Update = (props) => {
	const { slug } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`/books/${slug}`).then((res) => setData(res.data));
	}, []);
	return (
		<React.Fragment>
			<Form type='update' data={data} />{" "}
		</React.Fragment>
	);
};

export default Update;
