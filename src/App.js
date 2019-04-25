import List from "./components/List/List";
import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mylist: [], recommendations: [] };
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    this.setState({
      mylist: [
        {
          title: "Futurama",
          id: 1,
          img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
          title: "The Interview",
          id: 2,
          img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
        {
          title: "Gilmore Girls",
          id: 3,
          img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        }
      ],
      recommendations: [
        {
          title: "Family Guy",
          id: 4,
          img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        },
        {
          title: "The Croods",
          id: 5,
          img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        },
        {
          title: "Friends",
          id: 6,
          img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        }
      ]
    });
  }

  buttonHandler(evt, type) {
    let newList;
    let newRecomendation;
    if (type === "removeMovie") {
      newList = this.state.mylist.filter(
        movies => movies.id !== parseInt(evt.currentTarget.id)
      );
      newRecomendation = this.state.mylist.filter(
        movies => movies.id === parseInt(evt.currentTarget.id)
      );
      this.setState({
        mylist: newList,
        recommendations: [...this.state.recommendations, ...newRecomendation]
      });
    } else if (type === "addMovie") {
      newList = this.state.recommendations.filter(
        movies => movies.id === parseInt(evt.currentTarget.id)
      );
      newRecomendation = this.state.recommendations.filter(
        movies => movies.id !== parseInt(evt.currentTarget.id)
      );
      this.setState({
        mylist: [...this.state.mylist, ...newList],
        recommendations: newRecomendation
      });
    }
  }

  render() {
    return (
      <div className="App">
        <List
          list={this.state.mylist}
          title="My List"
          buttonHandler={this.buttonHandler}
          type="removeMovie"
          titleButton="Remove Movie"
        />
        <List
          list={this.state.recommendations}
          title="My Recomendations"
          buttonHandler={this.buttonHandler}
          type="addMovie"
          titleButton="Add Movie"
        />
      </div>
    );
  }
}

export default App;
