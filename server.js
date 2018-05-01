const config    = require('./knexfile');
const env       = 'development';
const knex      = require('knex')(config[env]);

// SELECT
knex
.select('first_name', 'last_name', 'email')
.from('users')
.then(result => {
    for (const element of result) {
        console.log(
            `First Name: ${element.first_name} Last Name: ${element.last_name}` );
    }
})
.catch(err => {
    console.log(err);
    return Promise.resolve();
})
.finally(() => {
    console.log("kill connection");
    knex.destroy();
})

// WHERE
knex('posts').where({
    userId: 1,
  })
.select('post')
.then(result => {
    console.log("results...");
    console.log(result);
})
.catch(err => {
    console.log(err);
    return Promise.resolve();
})
.finally(() => {
    console.log("kill connection");
    knex.destroy();
})

// JOIN
knex.select('post')
.from('posts')
.innerJoin('users', 'users.id', 'posts.userId')
.where('users.id', 3)
.then(result => {
    console.log("inner join")
    console.log(result)
})
.catch(err => {
    console.log(err);
    return Promise.resolve();
})
.finally(() => {
    console.log("kill connection");
    knex.destroy();
})