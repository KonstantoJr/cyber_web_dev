const express = require('express');
const { addTask } = require('../model/Todo');
const router = express.Router();

router.get('/add/todo', (req, res) => {
    const todo = req.query.todo;
    addTask(todo)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;