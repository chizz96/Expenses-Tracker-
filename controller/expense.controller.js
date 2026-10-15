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



module.exports = {
    AllExpense,
    viewOneexpense,
}