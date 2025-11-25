import { write } from "fs";
import { readUsers, writeUsers } from "../helpers/fileDb";
import parseBody from "../helpers/ParseBody";
import sendJson from "../helpers/SendJson"
import addRoutes from "../helpers/RouterHandler";

// get
addRoutes("GET", "/", (req, res) => {
    sendJson(res, 200, {
        message: "Hello, World!",
        path: req.url
    })
});

// get
addRoutes("GET", "/api", (req, res) => {
    sendJson(res, 200, {
        message: "Health status is ok",
        path: req.url
    })
});

// post
addRoutes("POST", "/api/users", async (req, res) => {
    const body = await parseBody(req);

    // user json read
    const users = readUsers();
    console.log(users);

    const newUser = {
        ...body
    };
    users?.push(newUser);

    writeUsers(users);

    sendJson(res, 201, { success: true, data: body });
})

// PUT

addRoutes("PUT", "/api/users/:id", async (req, res) => {
    const { id } = (req as any).params;
    const body = await parseBody(req);

    const users = readUsers();

    const index = users.findIndex((user: any) => user.id == id);

    if (index === -1) {
        sendJson(res, 404, {
            success: false,
            message: "user not found",
        });
    }

    users[index] = {
        ...users[index],
        ...body,
    };

    writeUsers(users);

    sendJson(res, 202, {
        success: true,
        message: `id ${id} user updated`,
        data: users[index],
    });
});
