const express = require("express")

const { AllExpense, viewOneexpense, deleteOneexpense } = require("../controller/expense.controller.js")

const router = express.Router()

router.get("/Expense", AllExpense)

router.get("/Expense/:id", viewOneexpense)

router.delete("/Expense/:id", deleteOneexpense)

module.exports = router