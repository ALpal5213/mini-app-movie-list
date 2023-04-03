/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Mean Girls', watch_status: 'true'},
    {title: 'Hackers', watch_status: 'true'},
    {title: 'The Grey', watch_status: 'true'},
    {title: 'Sunshine', watch_status: 'false'},
    {title: 'Ex Machina', watch_status: 'false'},
  ]);
};
