const express = require("express")

const { AllExpense } = require("../controller/expense.controller.js")

const router = express.Router()

router.get("/Expense", AllExpense)

