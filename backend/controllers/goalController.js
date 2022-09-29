
// @desc    Get goals
// @route   Get /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({message: "Get goals"})
}

// @desc    Set goals
// @route   Post /api/goals
// @access  Private
const setGoals = (req, res) => {
    console.log(req.body)
    res.status(200).json({message: "Set goals"})}

// @desc    Update goal
// @route   Put /api/goals
// @access  Private
const updateGoals = (req, res) => {
    res.status(200).json({message: `Upate goal ${req.params.id}`})}

// @desc    Delete goal
// @route   Delete /api/goals
// @access  Private
const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})}


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}