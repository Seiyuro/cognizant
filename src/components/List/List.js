import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";

class List extends Component {
  state = { display: false };

  hoverHandler = () => {
    this.setState({ display: true });
  };

  removeHoverHandler = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <fieldset className="main__list">
        <legend>{this.props.title}</legend>
        <ul className="container__list">
          {this.props.list.map(({ title, id, img }) => (
            <div
              key={id}
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.removeHoverHandler}
            >
              <Items
                title={title}
                id={id}
                img={img}
                hoverHandler={this.hoverHandler}
                display={this.state.display}
                buttonHandler={this.props.buttonHandler}
                type={this.props.type}
                titleButton={this.props.titleButton}
              />
            </div>
          ))}
        </ul>
      </fieldset>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  buttonHandler: PropTypes.func,
  type: PropTypes.string,
  titleButton: PropTypes.string
};

export default List;
