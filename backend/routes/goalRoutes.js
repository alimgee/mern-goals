const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)


/* single way of swetting
router.put('/:id', updateGoals )
router.get('/:id', deleteGoals) */

module.exports = router