import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import { json } from 'stream/consumers';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
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
        // const user = {
        //     id: 1, name: "John Doe",
        //     email: "john.doe@example.com"
        // };
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(user));

        let body = '';
        // listen data for chunks

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                console.log(parsedBody);
                console.log("changing saved");
                res.end(JSON.stringify(parsedBody));
            }
            catch (error: any) {
                console.log(error.message);
            }
        });

    }
});

server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});