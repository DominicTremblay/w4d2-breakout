
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable("posts", table => {
          table.increments('id').primary();
          table.string('post');
          table.integer('userId').references("users");
          table.timestamps();
      }),
      knex.schema.createTable("comments", table => {
        table.increments('id').primary();
        table.text('comment');
        table.integer('postId').references('posts');
        table.integer('userId').references('users');
        table.timestamps();
    }),
      knex.schema.createTable("likes", table => {
        table.increments('id').primary();
        table.integer('postId').references('posts');
        table.integer('userId').references('users');
        table.timestamps();
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('likes'),
      knex.schema.dropTable('comments'),
      knex.schema.dropTable('posts'),
  ])
};
