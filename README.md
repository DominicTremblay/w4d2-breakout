# w4d2-breakout
w4d2 breakout about knex at Lighthouse Labs

Today's Objectives:
1. What is knex
   - Why use knex
   - Installing knex
2. Migrations
   - Why use migrations
   - Creating migration
3. Seeding
   - Why use seedfiles
   - Creating seedfiles

#1. What is knex

- Knex is a query builder for Node that makes our life easier with object oriented syntax

## Why knex
- Abstract the different implementations of SQL from MSSQL, MySQL, PostgreSQL, SQLite3, and Oracle.
- knex handles the sanitization of user input at the library level to prevent SQL injection.
- Provides migrations for updating our database schema.

## Installing Knex

To install knex in your project directory:

    npm i --save knex

You might want to also install knex globally to use the knex CLI:

    npm i -g knex

Make sure Postgress is also installed:

    npm i --save pg

### Create the knexfile

The knexfile contains the database config. To create the knexfile in your project directory:

    knex init

Edit knexfile.js and add the database credentials.

Note: add the knexfile.js to the .gitignore file

### Add knex config to your server

    const config    = require('./knexfile');
    const env       = 'development';
    const knex      = require('knex')(config[env]);

#2. Migrations

## Why use migrations

- It is used for version control of the database much like git is used for tracking changes in the code.
- Migrations give the history of all changes made to the database schema.
- Migrations are pushed to github so everyone is working with the same database schema.

Note:
- Don't modify a migration that's already pushed. Other developpers won't have the same changes.
- Create a new migration instead. 

## Creating migrations

    knex migrate:make migration_name

A new migration is added to the migrations folder.

### Structure of a migration file

A migration has 2 parts:

- up: modify the database schema
- down: rollback the changes made to the database schema

For example, a create table as the up should have a corresponding drop table as the down:

    exports.up = function(knex, Promise) {
        return knex.schema.createTable("users", table => {
            table.increments('id');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.timestamps();
        });
    };

    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("users")
    };

Look up the Schema Builder in the documentation:
(http://knexjs.org/#Schema)[http://knexjs.org/#Schema]






