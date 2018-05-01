
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Tony', last_name: 'Stark', email: 'ton@stark.com', password: 'test'},
        {first_name: 'Bruce', last_name: 'Banner', email: 'bruce@banner.com', password: 'test'},
        {first_name: 'Peter', last_name: 'Parker', email: 'peter@parker.com', password: 'test'},
        {first_name: 'Wanda', last_name: 'Maximov', email: 'wanda@maximov.com', password: 'test'},
      ]);
    });
};
