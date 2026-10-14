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





module.exports = {
    AllExpense,
}