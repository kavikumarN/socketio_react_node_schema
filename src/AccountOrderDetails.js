import React from "react";
import "./App.css";


class AccountOrderDetails extends React.Component {

	openPage(e) {
    var i;
    var idx = e.target.id + "div";
    //console.log(e.target.id);
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "black";
      tablinks[i].style.color = "white";
    }
    document.getElementById(e.target.id).style.backgroundColor = "white";
    document.getElementById(e.target.id).style.color = "black";
    document.getElementById(idx).style.display = "block";
    //elmnt.style.backgroundColor = color;
  }

render(){
	return(

		 <div
            id="mydiv"
            className="trans"
            style={{
              left: "10px",
              position: "absolute",
              
              marginTop: "610px",
              backgroundColor: "#fff",
              width: "1900px",
              height: "320px",
              border: "1px solid #000000",
              overflow: "auto"
            }}
          >
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="accounts"
              style={{}}
            >
              Accounts
            </button>
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="orders"
            >
              Orders
            </button>
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="op_pos"
            >
              Open Positions
            </button>
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="close_pos"
            >
              Closed Positions
            </button>
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="summary"
            >
              Summary (0.00)
            </button>
            <button
              className="tablink"
              onClick={this.openPage.bind(this)}
              id="msg"
            >
              Messages
            </button>

            <div id="accountsdiv" className="tabcontent">
              <table
                className="table-hover"
                style={{ backgroundColor: "#ffffff", width: "60%" }}
              >
                <thead>
                  <tr>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Accounts
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Balance
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Equity
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Day P/L
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Used Mr
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Usable Mr
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Gross P/L
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Margin Call
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Type
                    </td>
                    <td style={{ textAlign: "center", width: "550px" }} />
                  </tr>
                </thead>
              </table>
            </div>

            <div id="ordersdiv" className="tabcontent">
              <table
                className="table-hover"
                style={{
                  borderCollapse: "collapse",
                  backgroundColor: "#ffffff",
                  width: "70%"
                }}
              >
                <thead>
                  <tr>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Order ID
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Account
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Type
                    </td>
                    <td style={{ textAlign: "center", width: "100x" }}>
                      Status
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Symbol
                    </td>
                    <td style={{ textAlign: "center", width: "150px" }}>
                      Amount(K)
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Sell
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>Buy</td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Range
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Stop
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      Limit
                    </td>
                    <td style={{ textAlign: "center", width: "550px" }} />
                  </tr>
                </thead>
              </table>
            </div>

            <div id="op_posdiv" className="tabcontent" />

            <div id="close_posdiv" className="tabcontent" />
            <div id="summarydiv" className="tabcontent" />
            <div id="msgdiv" className="tabcontent" />
          </div>

		);


 }
}

export default AccountOrderDetails;