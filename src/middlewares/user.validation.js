const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
    'any.required': 'El nombre es un campo requerido',
  }),
  second_name: Joi.string().trim().required().messages({
    'string.base': 'El segundo nombre debe ser un texto',
    'string.empty': 'El segundo nombre no debe ser un texto vacío',
    'any.required': 'El segundo nombre es un campo requerido',
  }),
  lastname: Joi.string().trim().required().messages({
    'string.base': 'El apellido debe ser un texto',
    'string.empty': 'El apellido no debe ser un texto vacío',
    'any.required': 'El apellido es un campo requerido',
  }),
  second_lastname: Joi.string().trim().required().messages({
    'string.base': 'El segundo apellido debe ser un texto',
    'string.empty': 'El segundo apellido no debe ser un texto vacío',
    'any.required': 'El segundo apellido es un campo requerido',
  }),
  birthdate: Joi.string().trim().required().messages({
    'string.base': 'La fecha de nacimiento debe ser un texto',
    'string.empty': 'La fecha de nacimiento no debe ser un texto vacío',
    'any.required': 'La fecha de nacimiento es un campo requerido',
  }),
  email: Joi.string().trim().required().messages({
    'string.base': 'El email debe ser un texto',
    'string.empty': 'El email no debe ser un texto vacío',
    'any.required': 'El email es un campo requerido',
  }),
  phone_number: Joi.string().trim().required().messages({
    'string.base': 'El número de teléfono debe ser un texto',
    'string.empty': 'El número de teléfono no debe ser un texto vacío',
    'any.required': 'El número de teléfono es un campo requerido',
  }),
});

module.exports = {
  create,
}