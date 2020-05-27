import express from "express";
import next from "next";

const port = process.env.PORT || 3000;
const isDevelop = process.env.NODE_ENV !== "production";
const app = next({ dev: isDevelop });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    // use the next-i18next middleware with our i18n configuration

    // handle nextjs routing
    server.get("*", (req, res) => {
        return handle(req, res);
    });
    server.post("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port);
    console.log(`Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
