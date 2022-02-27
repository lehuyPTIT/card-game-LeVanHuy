export const errors = {
  UNAUTHORIZED_WRONG_CREDENTIALS: {
    code: 4011,
    message: "Wrong email or password",
  },

  UNAUTHORIZED_INVALID_TOKEN: {
    message: "Token is invalid or expired",
    code: 4012,
  },
  UNAUTHORIZED_NO_TOKEN: {
    message: "No token",
  },
  FORBIDDEN_NO_USER: {
    message: "User is not recognized",
    code: 4032,
  },
  FORBIDDEN_ACCESS_DENIED: {
    message: "Access denied",
  },
  FORBIDDEN_DELETED_USER: {
    message: "User is deleted",
  },
  BAD_REQUEST_USER_ALREADY_EXIST: {
    message: "User already exist",
    code: 4001,
  },
  BAD_REQUEST: {
    code: 4011,
  },
};
