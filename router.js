const express = require('express');
const router = express.Router();

let employees = [
    { id: 1, name: 'John Doe', designation: 'Manager', location: 'New York', salary: 50000 },
    { id: 2, name: 'Jane Smith', designation: 'Developer', location: 'San Francisco', salary: 60000 },
];


router.get('/', (req, res) => {
    res.render('pages/home', { employees });
});


router.get('/add', (req, res) => {
    res.render('pages/add');
});

router.post('/add', (req, res) => {
    const { name, designation, location, salary } = req.body;
    const newEmployee = {
        id: employees.length + 1,
        name,
        designation,
        location,
        salary: parseInt(salary),
    };
    employees.push(newEmployee);
    res.redirect('/');
});


router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    employees = employees.filter(emp => emp.id !== id);
    res.redirect('/');
});


router.get('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        res.render('pages/update', { employee });
    } else {
        res.redirect('/');
    }
});


router.post('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        const { name, designation, location, salary } = req.body;
        employee.name = name;
        employee.designation = designation;
        employee.location = location;
        employee.salary = parseInt(salary);
    }
    res.redirect('/');
});

module.exports = router;
