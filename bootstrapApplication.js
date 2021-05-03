const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("swagger-jsdoc");
const swaggerDoc = require("./swaggerdocs");
require("dotenv").config();
module.exports.bootstrap = (app) => {
    const options = {
        swaggerDefinition: swaggerDoc,
        apis: ["./app/*/*.js"],
    };
    const specs = swaggerDocs(options);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    require("./app/helpers").bootstrap();
    require("./config/connectDatabase").connectDB()
    require("./app/routes/index").bootstrap(app);
    // require("./app/kafka-service/kakfa-manager").bootstrap();
}