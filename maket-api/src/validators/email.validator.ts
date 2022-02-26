import Joi from "joi";

import { Regexp } from "../constants";

export const emailValidator = Joi.object().keys({
  email: Joi.string().regex(Regexp.email).required(),
});
