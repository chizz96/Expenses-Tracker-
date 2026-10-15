const expenseDb = require("../model/expense.json")
const fs = require("fs")

const savetoDb = (data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile("./model/expense.json", data, (err)=>{
            if (err){
                reject(err)
            }else{
                resolve("file successufull written")
            }

        })
    })
}

const AllExpense = (req, res)=>{
    const user = expenseDb

    res.status(200).json({data: user})
}

const createExpense = async(req, res)=>{
    const {title, amount, category, description} = req.body
    const id = expenseDb.length + 1
    const date = new Date()
    const convertedDate = date.toLocaleString()

    const newExpense = {
        id:id,
        title,
        amount,
        category,
        description,
        createAt: convertedDate
    }
    
    expenseDb.push(newExpense)
    await savetoDb(JSON.stringify(expenseDb))
    res.status(201).json({message: "Expense created successfully", data: newExpense})

}  


const viewOneexpense = (req, res) => {
    const id = Number(req.params.id);

    const user = expenseDb.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    res.status(200).json({
        data: user
    });
}



module.exports = {
    AllExpense,
    createExpense,
    viewOneexpense,
}