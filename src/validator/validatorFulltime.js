import Joi from 'joi'

const fulltimeSchema = Joi.object({
    workingDay: Joi.string().required().message({
        'string.empty': 'WorkingDay is required',
    }),
    startDate: Joi.date().required().messages({
        'string.empty': 'StartDate is required',
    }),
    salary: Joi.number().required.messages({
        'string.empty': 'Salary is required',
    }),
})
const validateFulltime = (input) => {
    const { error } = fulltimeSchema.validate(input, { abortEarly: false })
    if (error) {
        return error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message
            return acc
        }, {})
    }
}

export default validateFulltime
