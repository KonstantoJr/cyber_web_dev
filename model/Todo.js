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

const deleteTask = async (id) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        const tasks = JSON.parse(data);
        let newTasks = tasks.filter(task => task.id != id);
        newTasks = newTasks.map((task, index) => {
            task.id = index + 1;
            return task;
        });

        fs.writeFile(path, JSON.stringify(newTasks), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}

const markDone = async (id) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        const tasks = JSON.parse(data);
        let newTasks = tasks.map(task => {
            if (task.id == id) {
                task.done = !task.done;
            }
            return task;
        });

        fs.writeFile(path, JSON.stringify(newTasks), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}






module.exports = {
    addTask,
    getTasks,
    deleteTask,
    markDone
}

