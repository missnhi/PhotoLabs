const ENV = require("./environment");

const PORT = process.env.PORT;
console.log("PORT:", PORT);


const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});