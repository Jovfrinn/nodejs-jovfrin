const express = require('express')
const router = express.Router()
const {getGoals, setGoals} = require('../controllers/goalContoller')

// router.get('/', (req,res) => {
//     res.status(200).json({
//         name:'Satria Yudha'
//     })
// })
// router.post('/', (req,res) => {
//     res.status(200).json({
//         name:'Satria Yudha'
//     })
// })
router.get('/', getGoals)
router.post('/', setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "Ini Update"
    })    
})

module.exports = router