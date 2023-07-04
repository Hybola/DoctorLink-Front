import Joi from 'joi'

const createpostSchema = Joi.object({
    title: Joi.string().required().message({
        'string.empty': 'Title is required',
    }),
    location: Joi.string().required().messages({
        'string.empty': 'Location is required',
    }),
    map: Joi.string().required.messages({
        'string.empty': 'Google Map is required',
    }),
    phone: Joi.number().required.messages({
        'string.empty': 'Phone number is required',
    }),
})

const validatecreatepost = (input) => {
    const { error } = createpostSchema.validate(input, { abortEarly: false })
    if (error) {
        return error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message
            return acc
        }, {})
    }
}

export default validatecreatepost
