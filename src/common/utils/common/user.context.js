import { requestContext } from "@fastify/request-context";

import { TOKENS } from "#constants";

/**
 *  Fastify wrapper on AsyncLocalStorage
 */

export const userContext = {
  get() {
    return requestContext.get(TOKENS.userJwtData);
  },
  set(value) {
    requestContext.set(TOKENS.userJwtData, value);
  },
};

export const userRefreshTokenContext = {
  get() {
    return requestContext.get(TOKENS.userCredentials);
  },
  set(value) {
    requestContext.set(TOKENS.userCredentials, value);
  },
};
