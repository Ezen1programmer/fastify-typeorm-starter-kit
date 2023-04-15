import schemas from "#modules/health-check/schemas.js";

import { SERVICE_UNAVAILABLE_EXCEPTION_503 } from "#errors";

//const version = "1.0.0";

// Exporting a constant named `autoPrefix` will tell
// to `fastify-autoload` that this plugin must be loaded
// with the prefix option. In this way every route declared
// inside this plugin and its children will have the prefix
// as part of the path.
export const autoPrefix = "/_app";

/**
 * Fastify tries not to impose you any design decision, but we highly
 * recommend to use the Fastify plugin system, as it gives you some neat features,
 * such as the load order and the guarantee that every part of your application
 * has been loaded before start listening to incoming requests.
 * See https://www.fastify.io/docs/latest/Plugins/.
 * For this reason routes and business logic should always wrapped inside plugins,
 * but you should never use `fastify-plugin` in this case, as you don't want to leak
 * your business logic or custom plugins to the rest of the application.
 *
 * As you will see the project structure is very boring™,
 * and this is on purpose. You don't need to think about how
 * anything should be done, that's simple! Do you need to declare
 * a set of routes? Plugin! Do you want to wrap each domain of your
 * application in a different folder? Plugin! Do you need to interact with the
 * request/response? Hook! And everytime the function signature will be the same.
 * Why we designed Fastify in this way? Because boring things are predictable.
 * You can have homogeneous or heterogeneous team, and the result will always
 * be the same. The entry barrier in the codebase will be low and everyone
 * will be able to undertand what's happening.
 *
 * It's always a good idea to expose a status route, so you can quickly
 * understand if your application is running and which version is deployed.
 */

/**
 *
 * @type {import("fastify").FastifyPluginAsync}
 */
export default async (fastify) => {
  /**
   *    There are two ways of declaring routes in Fastify,
   *    the "full" declaration and the "shorthand" declaration.
   *    The "shorthand" declaration is very similar to Express.
   *    Both can do the same things, there are no differences.
   *    I prefer the "full" declaration as I like to be explicit.
   *    @see https://www.fastify.io/docs/latest/Reference/Routes/
   */
  fastify.get("/", {
    /**
     *      Fastify does an extensive use of JSON schemas.
     *      It uses them for validating external input
     *      (thanks to https://github.com/ajv-validator/ajv)
     *      or improving the serialization speed of responses
     *      (thanks to https://github.com/fastify/fast-json-stringify).
     *      Since writing plain JSON schema is rather boring
     *      and error prone, we have created `fluent-json-schema`,
     *      a nice library to help you maintaining JSON schemas.
     *      Another reason to write your route definition with
     *      the schema configured, is that you will get automatic
     *      documentation with https://github.com/fastify/fastify-swagger
     */
    schema: schemas.check,
    async handler() {
      let status;
      try {
        await this.diContainer.cradle.dbConnection.query(`SELECT 1 + 1 as healthcheck`);
        status = true;
      } catch (e) {
        status = false;
      }

      const healthcheck = {
        uptime: process.uptime(),
        status,
        timestamp: Date.now(),
      };

      return JSON.stringify(status ? healthcheck : new SERVICE_UNAVAILABLE_EXCEPTION_503());
    },
  });
};
