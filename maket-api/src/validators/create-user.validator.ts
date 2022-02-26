import Joi from "joi";

import { Regexp } from "../constants";

export const createUserValidator = Joi.object().keys({
  email: Joi.string().max(255).regex(Regexp.email).required(),
  password: Joi.string().min(8).max(100).regex(Regexp.password).required(),
});
