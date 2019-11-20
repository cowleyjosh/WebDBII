
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '1234',
          make: 'Nissan',
          model: 'GTR',
          mileage: 1,
          type: 'Straight Drive',
          clean: 'true',
          salvage: 'false'
        },
        {
          VIN: '12345',
          make: 'Nissan',
          model: '370Z',
          mileage: 1,
          type: 'Straight Drive',
          clean: 'true',
          salvage: 'false'
        },{
          VIN: '123456',
          make: 'Tesla',
          model: 'Roadster',
          mileage: 1,
          type: 'Automatic',
          clean: 'true',
          salvage: 'false'
        },{
          VIN: '1234567',
          make: 'Tesla',
          model: 'Model S',
          mileage: 1,
          type: 'Automatic',
          clean: 'true',
          salvage: 'false'
        },{
          VIN: '12345678',
          make: 'Tesla',
          model: 'Model Y',
          mileage: 1,
          type: 'Automatic',
          clean: 'false',
          salvage: 'true'
        },

      ]);
    });
};