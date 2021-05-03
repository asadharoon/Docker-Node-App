const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("swagger-jsdoc");
const swaggerDoc = require("./swaggerdocs")
module.exports.bootstrap = (app) => {
    const options = {
        swaggerDefinition: swaggerDoc,
        apis: ["./app/*/*.js"],
    };
    const specs = swaggerDocs(options);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

}