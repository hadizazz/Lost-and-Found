import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import StorageIcon from "@material-ui/icons/Storage";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import axios from "axios";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  item: {
    height: "100px",
    width: "100px",
    color: "black",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "80px",
  },
});

export default class TotalBrg extends Component {
  //   state = {
  //     items: [],
  //   };

  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/api/items")
  //     .then((res) => res.json())
  //     .then((parsedJSON) =>
  //       parsedJSON.results.map((data) => ({
  //         id: `${data.id}`,
  //       }))
  //     )
  //     .then((items) =>
  //       this.setState({
  //         items,
  //         isLoaded: false,
  //       })
  //     )
  //     .catch((error) => console.log("parsing failed", error));
  // }

  state = {
    items: [],
  };

  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/api/items/4")
  //     .then((res) => res.json())
  //     .then((parsedJSON) =>
  //       parsedJSON.map((data) => ({
  //         id: `${data.id}`
  //       }))
  //     )
  //     .then((items) =>
  //       this.setState({
  //         items,
  //         isLoaded: false,
  //       })
  //     )
  //     .catch((error) => console.log("parsing failed", error));
  // }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/items/")
      .then((res) => {
        console.log(res);
        this.setState({ items: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let last = [];
    let lastId;
    const { items } = this.state;
    const classes = styles;
    // last.push(items[items.length-1])

    return (
      <div>
        {items.length > 0
          ? items.forEach((element) => {
              if (!items[items.length - 1]) {
                console.log(element[items.length - 1]);
              }
              last.push(element.id);
            })
          : null}
        {last.length > 0
          ? last.map((item) => {
              lastId = last[last.length - 1];
              console.log(lastId);
            })
          : null}
        <div className="totalBrg">
          <div style={{ padding: "20px 100px" }}>
            <div className={classes.wrapper}>
              <HowToRegIcon
                className="barangIcon"
                style={{ margin: "auto", fontSize: "50px" }}
              ></HowToRegIcon>
              <h3>97</h3>
              <h5>Barang yang Dikembalikan</h5>
            </div>
          </div>
          <div style={{ padding: "20px 100px" }}>
            <StorageIcon
              key="root"
              className="barangIcon"
              style={{ margin: "auto", fontSize: "50px" }}
            >
              /
            </StorageIcon>
            <h3>{lastId}</h3>
            <h5>Total Barang yang terkumpul</h5>
          </div>
          <div>
            <div style={{ padding: "20px 100px" }}>
              <SupervisorAccountIcon
                className="barangIcon"
                style={{ margin: "auto", fontSize: "50px" }}
              >
                /
              </SupervisorAccountIcon>
              <h3>103</h3>
              <h5>Kolega yang bergabung</h5>
            </div>
          </div>
          {/* <Grid icon={<HowToRegIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="18" btnTitle="Barang Dikembalikan"/>
                  <Grid icon={<StorageIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="76 Total barang terkumpul    " btnTitle="Show me More"/>
                <Grid icon={<SupervisorAccountIcon style={{fill:"#000000",height:"80", width:"70",}}/>} title="103 Kolega yang bergabung" btnTitle="Show me More"/> */}
        </div>
      </div>
    );
  }
}
