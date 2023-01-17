const Employee = require('../models/Employee');

// ADD EMPLOYEE
const addEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ email: req.body.email });
    if (employee) {
      res.status(404).json('Employee exist');
    } else {
      await Employee.create(req.body);
      res.status(201).json({ message: 'Employee added successfully' });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// GET ALL EMPLOYEES
const getAllEmployees = async (req, res, next) => {
  try {
    const allEmployees = await Employee.find();
    res.status(200).json(allEmployees);
  } catch (error) {
    console.log(error.message);
  }
};

// GET EMPLOYEE
const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ _id: req.params.id });
    res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE EMPLOYEE
const updateEmployee = async (req, res, next) => {
  try {
    const employeeInfo = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      { _id: req.params.id },
      employeeInfo,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE EMPLOYEE
const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
