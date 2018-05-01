
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post: 'Hey what\'s up', userId: 1},
        {post: 'Hey gang', userId: 2},
        {post: 'That\'s awesome', userId: 3},
        {post: 'Hey dude, userId: 4'},
      ]);
    });
};
