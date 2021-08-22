import React, { Component } from "react";
class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.props.beachData.map((Data, id) => (
            <div className="box" key={id}>
              <div className="box_img">
                <img src={Data.img} alt="" />
              </div>
              <div className="box_section">
                <div className="box_content">
                  <h2>{Data.title}</h2>
                  <p>{Data.data}</p>
                  <button
                    id={Data.id}
                    className="booking"
                    onClick={this.props.handleClick}>
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Cart;
