import { IncomingMessage, Server, ServerResponse } from "http";

type RouterHandler = (req: IncomingMessage, res: ServerResponse) => void;
const routes: Map<string, Map<string, RouterHandler>> = new Map();

function addRoute(method: string, path: string, handler: RouterHandler) {
    if (!routes.has(method)) routes.set(method, new Map());
    routes.get(method)!.set(path, handler);
}

export default addRoute;