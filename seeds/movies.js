/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'cool movie',genre: 'comedy',release_date:'1997-09-03'},
    {id: 2, title: 'cool movie 2',genre: 'drama',release_date:'2001-02-03'},
    {id: 3, title: 'whatever',genre: 'action',release_date:'2003-08-02'}
  ]);
};
