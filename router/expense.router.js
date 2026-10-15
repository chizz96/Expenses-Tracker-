const express = require("express")

const { AllExpense,viewOneexpense } = require("../controller/expense.controller.js")

const router = express.Router()

router.get("/Expense", AllExpense)

router.get("/Expense/:id", viewOneexpense)


module.exports=router