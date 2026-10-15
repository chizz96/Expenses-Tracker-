const express = require("express")

const { AllExpense, createExpense, viewOneexpense } = require("../controller/expense.controller.js")

const logger = require("../middleware/logger.js")

const router = express.Router()

router.get("/Expense", logger, AllExpense)

router.post("/createExpense", logger, createExpense)

router.get("/Expense/:id", logger, viewOneexpense)

module.exports = router




