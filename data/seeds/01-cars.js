// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Chrysler',
        model: '200',
        mileage: 123000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '4444444444444',
        make: 'Toyota',
        model: 'Corola',
        mileage: 123123,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '3333333333333',
        make: 'Chrysler',
        model: '200',
        mileage: 123000,
    }
]

exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}