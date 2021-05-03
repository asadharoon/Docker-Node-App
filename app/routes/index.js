const fs = require('fs');

exports.bootstrap = app => {
    console.log("in bootstrap method ,app")
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') {
            return;

        }
        const route = require(`./${file.split(".")[0]}`);

        if (!route || !route.router) {
            return;
        }

        app.use(`/api/${route.basePath ? `${route.basePath}` : ''}`, route.router);

    });
};