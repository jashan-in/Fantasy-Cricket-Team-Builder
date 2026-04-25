import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fantasy Cricket API",
      version: "1.0.0",
      description: "API documentation for Fantasy Cricket Team Builder"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;