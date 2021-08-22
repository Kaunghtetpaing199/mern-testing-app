import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.cardData.map((data) => (
          <div
            key={data}
            className={this.props.showClasses()}
            style={{ backgroundImage: `url(${data.img})` }}>
            <div className="card" key={data.id}>
              <header>
                <h3 className="BeachName">{data.title}</h3>
                <span className="close">
                  <i onClick={this.props.handleClose}>
                    <FaTimes />
                  </i>
                </span>
              </header>
              <ul className="card_list">
                {data.card.map((data) => (
                  <li key={data.item}>{data.item}</li>
                ))}
              </ul>
              <footer>
                <h3 className="tour-price">Price: {data.price}</h3>
                <button className="card-button">Booking</button>
              </footer>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Modal;
