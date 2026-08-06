import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Learn Together API",
      version: "1.0.0",
      description: "API documentation for Learn Together App",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // where your route docs are written
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;