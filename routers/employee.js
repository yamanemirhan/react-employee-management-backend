const express = require('express');
const {
  addEmployee,
  getEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
} = require('../controllers/employee');

const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);

module.exports = router;
