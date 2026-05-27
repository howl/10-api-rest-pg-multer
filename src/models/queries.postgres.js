const queriesUser = {
  getUserById: "SELECT id, name FROM users WHERE id = $1;",
  getUserByEmail: "SELECT id, name, email, password FROM users WHERE email = $1;",
  addUser: "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, creation_date;"
};

const queriesService = {
  getServices: 'SELECT * FROM services;',
  getServiceById: 'SELECT * FROM services WHERE id = $1;',
  addService: 'INSERT INTO services (name, description, category) VALUES ($1, $2, $3) RETURNING *;',
  updateServiceById: 'UPDATE services SET name = $2, description = $3, category = $4 WHERE id = $1 RETURNING *;',
  deleteServiceById: 'DELETE FROM services WHERE id = $1 RETURNING *;'
};

module.exports = { queriesUser, queriesService };
