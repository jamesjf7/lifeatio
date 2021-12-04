const exppress = require('express');
const todo = require('../controllers/todo');

const router = exppress.Router();

router.get('/', todo.getAll);
router.get('/:id', todo.getById);
router.post('', todo.create);
router.put('/:id', todo.update);
router.delete('/:id', todo.delete);

module.exports = router;