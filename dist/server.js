"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const server = http_1.default.createServer((req, res) => {
    console.log("server is running...");
    // root route ("/") get request
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: "Hello, World!",
            path: req.url
        }));
    }
    // api route ("/api") get request
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: "Health status is ok",
            path: req.url
        }));
    }
    if (req.url === "/api/users" && req.method === "POST") {
        const user = {
            id: 1, name: "John Doe",
            email: "john.doe@example.com"
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    }
});
server.listen(config_1.default.port, () => {
    console.log(`Server is listening on port ${config_1.default.port}`);
});
