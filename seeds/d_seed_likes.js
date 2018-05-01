
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {userId: 1, postId: 1},
        {userId: 2, postId: 2},
        {userId: 3, postId: 3},
        {userId: 4, postId: 4},
      ]);
    });
};
