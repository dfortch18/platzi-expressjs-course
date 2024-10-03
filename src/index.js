const { PORT } = require("./config");
const express = require("express");
const cors = require("cors");
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares");

const app = express();

app.use(express.json());

const { addApiRouters } = require("./routers");

addApiRouters(app);

app.use(cors());
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
