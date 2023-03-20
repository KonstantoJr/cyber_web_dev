const express = require('express');
const { getTasks } = require('../model/Todo');
const router = express.Router();

router.get('/', (req, res) => {
    const tasks = getTasks();
    res.render('index', {
        tasks
    });
}
);

module.exports = router;