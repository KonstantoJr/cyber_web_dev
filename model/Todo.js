const fs = require('fs');

const path = __dirname + '/tasks.json';


const addTask = async (task) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        const tasks = JSON.parse(data);
        let newTask = {
            id: tasks.length + 1,
            content: task,
            done: false
        }
        tasks.push(newTask);
        fs.writeFile(path, JSON.stringify(tasks), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}

const getTasks = () => {
    const tasks = JSON.parse(fs.readFileSync(path));
    return tasks;
}


module.exports = {
    addTask,
    getTasks
}

