const express = require('express');

const router = express.Router();

router.get('/add/todo', (req, res) => {
    const todo = req.query.todo;
    console.log(todo);
});

module.exports = router;