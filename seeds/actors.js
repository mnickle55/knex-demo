/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('actors').del()
  await knex('actors').insert([
    {id: 1, name: 'john smith',age: 55},
    {id: 2, name: 'alice smith',age: 34}
  ]);
};
