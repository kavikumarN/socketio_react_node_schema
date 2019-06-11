let express = require("express");
let cors = require("cors");
const mysql = require("mysql");

const app = express();

var server = app.listen(process.env.PORT || 5000, listen);
var io = require("socket.io")(server);
var con = mysql.createConnection("mysql://mat:root@localhost:3306/testdb");

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Credentials", true);
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server listening at http://" + host + ":" + port);
}

con.connect(function(err) {
  if (err) throw err;
  console.log(" Database Connected!");
});

var symbols, values;

function callrand() {
  if (Array.isArray(symbols)) {
    symbols.forEach(function(symbol) {
      var d1 = Math.floor(Math.random().toFixed(5) * 100000);
      var d2 = Math.floor(Math.random().toFixed(5) * 100000);
      let date = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      values = { symbol: symbol, sell: d1, buy: d2 };

      io.to(symbol).emit("stack", values);
      var sql =
        "insert into forexsample (symbol,b_price, s_price,date) values ('" +
        symbol +
        "'," +
        d1 +
        "," +
        d2 +
        ",'" +
        date +
        "') ";
      con.query(sql, function(err, result) {
        if (err) throw err;
      });
      console.log(values);
    });
  }
}

setInterval(function() {
  callrand();
}, 200);

io.on("connection", function(socket) {
  console.log("User connected. Socket id %s", socket.id);

  socket.on("join", function(rooms) {
    symbols = rooms;
    console.log("Socket %s subscribed to %s", socket.id, symbols);

    if (Array.isArray(rooms)) {
      rooms.forEach(function(room) {
        socket.join(room);
      });
    } else {
      socket.join(rooms);
    }
  });

  //callrand();
  //setInterval(function(){callrand()}, 2000);

  socket.on("disconnect", function() {
    console.log("User disconnected - %s", socket.id);
  });
});
