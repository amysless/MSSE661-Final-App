/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `ideas` (case-insensitive), with
 * - id as an integer/number that can't have null values, auto-increment it
 * - idea with a max of 255 characters, cannot have null values
 * - email with a max of 255 characters, cannot have nulls
 * - status with a max of 10 characters, has a default of 'pending'
 * - created date
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `id` column for example)
 * - id is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_IDEAS_TABLE = `CREATE TABLE IF NOT EXISTS ideas(
  id int NOT NULL AUTO_INCREMENT,
  idea varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  status varchar(40),
  created_date DATETIME DEFAULT CURRENT_TIMESTAMP()
)`;

// Get every idea
exports.ALL_IDEAS = `SELECT * FROM ideas`;

// Get a single idea by id
exports.SINGLE_IDEAS = `SELECT * FROM ideas WHERE id = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new idea in `ideas` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_IDEAS = `INSERT INTO ideas (idea, email, status) VALUES (?, ?, ?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_IDEAS = `UPDATE ideas SET idea = ?, status = ?, entry = ? WHERE id = ?`;

// Delete an idea by id
exports.DELETE_IDEAS = `DELETE FROM ideas WHERE id = ?`;
