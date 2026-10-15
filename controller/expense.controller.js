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

const viewOneexpense = (req, res) => {
    const id = Number(req.params.id);

    const user = database.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    res.status(200).json({
        data: user
    });
}

const deleteOneexpense = async(req, res)=>{
    const id = Number(req.params.id)
    const userIndex =  expenseDb.findIndex((user)=> user.id === id)

    if (userIndex === -1){
        res.status(404).json({message:"user not found"})
    }

    expenseDb.splice(userIndex, 1)
    await savetoDb(JSON.stringify(expenseDb, null , 2))
    res.status(200).json({message: "Expense deleted successfully"})
}
module.exports = {
    AllExpense,
    viewOneexpense,
    deleteOneexpense,
}