
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'Super awesome movie!', userId: 1, postId: 1},
        {comment: 'So cool!', userId: 2, postId: 2},
        {comment: 'Amazing!', userId: 3, postId: 3}
      ]);
    });
};
