import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import StorageIcon from "@material-ui/icons/Storage";
import HowToRegIcon from "@material-ui/icons/HowToReg";

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

  componentDidMount() {    
    fetch("http://127.0.0.1:8000/api/items/4")
      .then((res) => res.json())
      .then((parsedJSON) =>
        parsedJSON.map((data) => ({
          id: `${data.id}`
        }))
      )
      .then((items) =>
        this.setState({
          items,
          isLoaded: false,
        })
      )
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    const { items } = this.state;
    const classes = styles;
    return (
      <div>
        <div className={classes.grid}>
          {items.length > 0 
            ? items.map((item) => {
                const { id } = item;
                return (
                  <div style={{ display: "inline-block" }}>
                    <div className={classes.wrapper}>
                      <HowToRegIcon
                        className={classes.item}
                        style={{ margin: "auto" }}
                        ></HowToRegIcon>
                      <h3>{id}</h3>
                      <h5>Barang yang Dikembalikan</h5>
                    </div>
                    <div style={{ padding: "20px 100px" }}>
                      <StorageIcon
                        className={classes.item}
                        style={{ margin: "auto" }}
                        >
                        MEMEK
                      </StorageIcon>
                      <h3>76</h3>
                      <h5>Total Barang yang terkumpul</h5>
                    </div>
                    <div>
                      <SupervisorAccountIcon
                        className={classes.item}
                        style={{ margin: "auto" }}
                        >
                        Itil
                      </SupervisorAccountIcon>
                      <h3>103</h3>
                      <h5>Kolega yang bergabung</h5>
                    </div>
                    {/* <Grid icon={<HowToRegIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="18" btnTitle="Barang Dikembalikan"/>
                <Grid icon={<StorageIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="76 Total barang terkumpul    " btnTitle="Show me More"/>
              <Grid icon={<SupervisorAccountIcon style={{fill:"#000000",height:"80", width:"70",}}/>} title="103 Kolega yang bergabung" btnTitle="Show me More"/> */}
                  </div>
                );
              }
              )
              : null}
              </div>
              </div>
              );
            }
}
//   render() {
//     const { items } = this.state;
//     return (
//       <div className="boxWhite">
//         <h2>Random User</h2>
//         {items.length > 0
//           ? items.map((item) => {
//               const { id, firstName, lastName, location, thumbnail } = item;
//               return (
//                 <div key={id} className="bgCircle">
//                   <center>
//                     <img src={thumbnail} alt={firstName} className="circle" />{" "}
//                   </center>
//                   <br />
//                   <div className="ctr">
//                     {firstName} {lastName}
//                     <br />
//                     {location}
//                   </div>
//                 </div>
//               );
//             })
//           : null}
//       </div>
//     );
//   }
// }
