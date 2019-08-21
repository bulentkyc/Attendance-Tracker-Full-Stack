const users = require('../model/userRegistration');

exports.newUserForm = (req,res) => {
    let errors = []
    let newUser = {
        newUserID : '',
        newUserEmail : req.body.newUserEmail,
        newUserPass : req.body.newUserPass,
        newUserPassConfirm : req.body.newUserPassConfirm
    }
    users.create(newUser,(err, newUser)=>{

        if(err) {
            errors.push('control your data')
            res.json({
                status:'error',
                errors
            }) 
        }
        else{
            res.json({
                status:'success',
                newUserData:newUser   
            })
        }

    })
}