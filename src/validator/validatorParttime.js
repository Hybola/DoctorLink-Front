import Joi from 'joi'

const parttimeSchema = Joi.object({
    startDate: Joi.date().required().message({
        'string.empty': 'StartDate is required',
    }),
    endDate: Joi.date().required().messages({
        'string.empty': 'EndDate is required',
    }),
    wage: Joi.number().required.messages({
        'string.empty': 'Wage is required',
    }),
})

const validateParttime = (input) => {
    const { error } = parttimeSchema.validate(input, { abortEarly: false })
    if (error) {
        return error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message
            return acc
        }, {})
    }
}

export default validateParttime
