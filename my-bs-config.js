module.exports = {
    port: 1234,
    middleware: [
        {
            route: "/mock",
            handle: function (req, res, next) {
                // handle any requests at /api
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                    name: "test"
                }));

            }
        }
    ]
};