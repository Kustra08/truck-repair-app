const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const port = process.env.PORT || 3001;

// Define a PostgreSQL database connection
const db = pgp({
  database: 'truck_repair',
  user: 'postgres',
  password: '4214',
  host: 'localhost',
  port: '5432',
});

// Middleware
app.use(bodyParser.json());

// Define API endpoints

// Get all repair shops
app.get('/api/repair-shops', async (req, res) => {
  try {
    const repairShops = await db.any('SELECT * FROM truck_repair_schema.repair_shop');
    res.json(repairShops);
  } catch (error) {
    console.error('Error fetching repair shops:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new repair shop
app.post('/api/repair-shops', async (req, res) => {
  const { shop_name, city_id, abn, tfn, bank_details_bsb, bank_details_account, phone_number, email } = req.body;
  
  try {
    const newShop = await db.one(
      'INSERT INTO truck_repair_schema.repair_shop (shop_name, city_id, abn, tfn, bank_details_bsb, bank_details_account, phone_number, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [shop_name, city_id, abn, tfn, bank_details_bsb, bank_details_account, phone_number, email]
    );
    res.json(newShop);
  } catch (error) {
    console.error('Error creating repair shop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await db.any('SELECT * FROM truck_repair_schema.employee');
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new employee
app.post('/api/employees', async (req, res) => {
  const { first_name, last_name, employment_start_date, position_id, city_id, is_active } = req.body;
  
  try {
    const newEmployee = await db.one(
      'INSERT INTO truck_repair_schema.employee (first_name, last_name, employment_start_date, position_id, city_id, is_active) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [first_name, last_name, employment_start_date, position_id, city_id, is_active]
    );
    res.json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// More endpoints for customers, quotations, etc. can be added similarly

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
