module.exports = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Test Application API",
        "description": "Test Application made with Nodejs and Docker"
    },
    "tags": [

        {
            "name": "Products",
            "description": "API for Products"
        }
    ],
    "paths": {
        "/api/products/listAll": {
            "get": {
                "tags": [
                    "Products"
                ],
                "summary": "Get all Products",

                "responses": {
                    "200": {
                        "description": "Products found"
                    }
                }
            }
        },
        "/api/products/listProdWithCat": {
            "parameters": [
                {
                    "in": "query",
                    "name": "category",
                    "description": "Enter Category",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "get": {
                "tags": [
                    "Products"
                ],
                "summary": "Get all Products With input category",

                "responses": {
                    "200": {
                        "description": "Products found with input category"
                    },
                    "400": {
                        "description": "Product not found."
                    }
                }
            }
        }
    }
}