import React from "react";
import "./SimpleDealingRates.css";
import io from "socket.io-client";

var socket;

class SimpleDealingRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //value : '12345',
      visible: false,
      stacks: [{ symbol: "XAU/USD", sell: "123456", buy: "654321" }]
    };
  }

  componentDidMount() {
    console.log("Component has mounted ");

    var that = this;
    var symbols = ["EUR/USD"]; // "XAU/USD","GBP/USD","JPY/USD","AUD/USD","NZD/USD","BTC/USD","USD/CHF","CAD/JPY","USD/TRY"];

    socket = io.connect("http://192.168.1.145:5000");

    socket.emit("join", symbols);

    socket.on("stack", function(datas) {
      console.log(datas);

      var stacks = that.state.stacks;
      if (stacks === []) {
        stacks.push(datas);
      } else {
        stacks.map((stack, i) => {
          stack.buy = datas.buy;
          stack.sell = datas.sell;

          // stacks.push(datas);
        });
      }
      that.setState({
        stacks: stacks
      });
    });
  }

  render() {
    return (
      <div className="SimpleDealingRates">
        <pre>
          {" "}
          {this.state.stacks.map((data, i) => (
            <ul>
              <li>{data.buy}</li>
              <li>{data.sell}</li>
            </ul>
          ))}
        </pre>
      </div>
    );
  }
}

export default SimpleDealingRates;
