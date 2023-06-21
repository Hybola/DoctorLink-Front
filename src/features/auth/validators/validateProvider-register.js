import Joi from 'joi'

const registerSchema = Joi.object({
    email: Joi.alternatives([Joi.string().email({ tlds: false })]).messages({
        'alternatives.match': 'Invalid email address.',
    }),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required()
        .messages({
            'string.empty': 'Password is required.',
            'string.pattern.base':
                'Password must be at least 6 characters and contain only alphabet and number.',
        }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
        'any.only': 'Password and confirm password did not match.',
        'string.empty': 'Confirm password is required.',
    }),
    healthProviderName: Joi.string().trim().required().messages({
        'string.empty': 'Health provider name is required.',
    }),
    mobile: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .trim()
        .messages({
            'string.empty': 'Password is required.',
            'string.pattern.base': 'Mobile number is required.',
        }),
})

const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false })
    if (error) {
        return error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message
            return acc
        }, {})
    }
}

export default validateRegister
