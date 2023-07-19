const { User, Meal } = require('../data/models')
const { errors: { ExistanceError, AuthError } } = require('../../com')

module.exports = async function retrieveMeals(userId) {

    const user = await User.findById(userId)

    if (!user) throw new ExistanceError(`User with id ${userId} not found`)

    const meals = await Meal.find().sort('-date').populate('author', '-password -likedChefs -meals -reviews').lean()
    debugger
    meals.forEach(meal => {

        meal.id = meal._id.toString()

        delete meal._id

        if (meal.author._id) {
            meal.author.id = meal.author._id.toString()
            delete meal.author._id
        }
    })

    return meals
}

/*    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistanceError(`User with id ${userId} not found`)

            return Meal.find().sort('-date').populate('author', '-password -likedChefs -meals -reviews').lean()
                .then(meals => {
                    meals.forEach(meal => {

                        meal.id = meal._id.toString()

                        delete meal._id

                        if (meal.author._id) {
                            meal.author.id = meal.author._id.toString()
                            delete meal.author._id
                        }
                    })

                    return meals
                })
        })*/