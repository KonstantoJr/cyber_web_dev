const express = require('express');
const { addTask, deleteTask, markDone } = require('../model/Todo');
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

router.get('/delete/todo/:id', (req, res) => {
    const id = req.params.id;
    deleteTask(id)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/mark/todo/:id', (req, res) => {
    const id = req.params.id;
    markDone(id)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;