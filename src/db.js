const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Test connection on init
async function init() {
  try {
    const client = await pool.connect();
    console.log('Database connected');
    client.release();
  } catch (err) {
    console.error('Database connection failed:', err.message);
    if (process.env.NODE_ENV === 'production') process.exit(1);
  }
}

module.exports = { pool, query: (text, params) => pool.query(text, params), init };
