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
- Abstract the different implementations of SQL from MSSQL, MySQL, PostgreSQL, SQLite3, and Oracle
- Provides migrations for updating our database schema

## Installing Knex

To install knex in your project directory:

    npm i --save knex

You might want to also install knex globally to use the knex CLI:

    npm i -g knex

### Create the knexfile

The knexfile contains the database config. To create the knexfile in your project directory:

    knex init

Edit knexfile.js and add the database credentials.

Note: add the knexfile.js to the .gitignore file

### Add knex config to your server

    const config    = require('./knexfile');
    const env       = 'development';
    const knex      = require('knex')(config[env]);

    


