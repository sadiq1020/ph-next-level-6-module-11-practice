import parseBody from "../helpers/ParseBody";
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

addRoute("POST", "/api/users", async (req, res) => {
    const body = await parseBody(req);
    sendJson(res, 201, { success: true, data: body });
})

