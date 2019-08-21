<<<<<<< HEAD
const users = require('../model/userRegistration');

exports.newUserForm = (req,res) => {
    let errors = []
    let newUser = {
        newUserID : '',
=======
import userRegistration from '..model/userRegistration'



exports.newUserForm = (req,res) =>{
    let errors = []
    let newUser = {
        newUserID : req.body.newUserID,
>>>>>>> beb8897128b9b95f1a00406e423da36212e24942
        newUserEmail : req.body.newUserEmail,
        newUserPass : req.body.newUserPass,
        newUserPassConfirm : req.body.newUserPassConfirm
    }
<<<<<<< HEAD
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
=======
    userRegistration.create(newUser,(err, newUser)=>{

        if(err) {
               errors.push({'control your data'})
               res.Json({
                   status:'error',
                   errors
                }) 
            }
        else{
            res.Json({
                status:'success',
                 newUserData:newUser   
>>>>>>> beb8897128b9b95f1a00406e423da36212e24942
            })
        }

    })
}