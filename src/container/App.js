import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import { requestRobots, setSearchField } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    talentList: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.isPending,
  };
};

//dispatch -> what triggers an action
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },

    onReqestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onReqestRobots();
    // fetch("https://api.mocki.io/v1/89d4c4de")
    //   // fetch -> to make requests to the server
    //   .then((response) => response.json())
    //   .then((talentList) => this.setState({ talentList: talentList }));
  }

  // onSearch = (event) => {
  //   this.setState({ searchField: event.target.value });
  //   console.log(this.state);
  // };

  render() {
    const { searchField, onSearchChange, talentList, isPending } = this.props;

    const filteredTalents = talentList.filter((talent) => {
      return talent.title.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <>
        <div className="app">
          <div className="jumbotron">
            <div className="content">
              <h1>Talent Finder</h1>
              <h2>
                Big talent pool, high client satisfaction rates, quick searches.
                Talent Finder finds you talents that fit your company the best!
              </h2>
              <SearchBox onSearch={onSearchChange} />
            </div>

            <div className="illustrations">
              <img
                src={require("../assets/female.svg")}
                alt="female-worker"
              ></img>
              <img src={require("../assets/male.svg")} alt="male-worker"></img>
            </div>
          </div>

          <div className="card-container">
            <CardList users={filteredTalents} />
          </div>
        </div>
        <footer>
          <p>
            &copy; 2020 made by
            <a
              href="https://github.com/clairepeng0808"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              clairepeng
            </a>
          </p>
        </footer>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect() is going to return another function -> higher order components
