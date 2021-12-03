const Todo = require('../models/todo');

module.exports = {
    getAll: async (req, res) => {
        try {
            const todos = await Todo.findAll({});
            res.send(todos);
        } catch (error) {
            console.log(error);   
        }
    },
    getById: async (req, res) => {
        try {
            const todo = await Todo.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.send(todo);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            await Todo.create({
                description: req.body.description,
                complete: false
            });
            res.status(201).json({
                message: 'Todo created successfully'
            })
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            await Todo.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.json({
                message: 'Todo updated successfully'
            });
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            await Todo.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json({
                message: 'Todo deleted successfully'
            });
        } catch (error) {
            console.log(error);
        }
    }
}