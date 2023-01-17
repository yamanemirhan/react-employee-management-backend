const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minlength: [1, 'Please provide a name at least 1 characters'],
    maxlength: [50, 'Please provide a name with maximum 50 characters'],
  },
  surname: {
    type: String,
    required: [true, 'Please provide a surname'],
    minlength: [1, 'Please provide a surname at least 1 characters'],
    maxlength: [50, 'Please provide a surname with maximum 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    match: [
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    unique: true,
  },
  type: {
    type: String,
    required: [true, 'Please provide a type'],
    default: 'Full Time',
    enum: ['Full Time', 'Part Time', 'Seasonal', 'Temporary'],
  },
  birthday: {
    type: String,
  },
  salary: {
    type: Number,
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
