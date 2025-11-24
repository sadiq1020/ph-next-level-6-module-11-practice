import addRoute from "../helpers/RouterHandler"
import sendJson from "../helpers/SendJson"

addRoute("GET", "/", (req, res) => {
    sendJson(res, 200, {
        message: "Hello, World!",
        path: req.url
    })
});

addRoute("GET", "/api", (req, res) => {
    sendJson(res, 200, {
        message: "Health status is ok",
        path: req.url
    })
});

