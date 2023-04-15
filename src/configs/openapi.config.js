import { env } from "../../configs/env.js";
import { authConfig } from "./auth.config.js";

export const openapiConfig = {
  routePrefix: "/docs",
  exposeRoute: true,
  openapi: {
    info: {
      title: "API documentation",
      description: "Autogenerated API documentation",
      version: env.VERSION || "1.0.0",
    },
    components: {
      securitySchemes: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
        bearerTokenAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // optional, arbitrary value for documentation purposes
          name: "Bearer Token",
          in: "header",
        },
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: authConfig.cookieKeys.refreshToken,
        },
      },
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:3000",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "dev", description: "Dev related end-points" }],
  },
};