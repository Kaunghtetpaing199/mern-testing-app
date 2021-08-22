import React, { Component } from "react";
import Data from "./data.json";
import "./style.css";
import Modal from "./cart/modal";
import Cart from "./cart/shopping-cart";
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beachData: Data,
			cardData: [],
			appendCard: false,
		};
	}
	showClasses = () => {
		return this.state.appendCard
			? "modal_card appendCard"
			: "modal_card hideCard";
	};
	handleClose = () => {
		this.setState({ cardData: [], appendCard: false });
	};
	render() {
		let handleClick = (e) => {
			let cardData = this.state.beachData.find(
				(data) => data.id === parseFloat(e.target.id)
			);
			this.setState({ cardData: [cardData], appendCard: true });
		};
		return (
			<React.Fragment>
				<Modal
					cardData={this.state.cardData}
					handleClose={this.handleClose}
					showClasses={this.showClasses}
				/>
				<Cart beachData={this.state.beachData} handleClick={handleClick} />
			</React.Fragment>
		);
	}
}
export default Home;
