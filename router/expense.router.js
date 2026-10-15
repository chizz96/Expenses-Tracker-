const express = require("express")

const { AllExpense, createExpense } = require("../controller/expense.controller.js")

const logger = require("../middleware/logger.js")

const router = express.Router()

router.get("/Expense", logger, AllExpense)

router.post("/createExpense", logger, createExpense)

module.exports = router

