import userRegistration from '..model/userRegistration'



export.newUserForm = (req,res) =>{
    let errors = []
    let newUser = {
        newUserID : req.body.newUserID,
        newUserEmail : req.body.newUserEmail,
        newUserPass : req.body.newUserPass,
        newUserPassConfirm : req.body.newUserPassConfirm
    }
    userRegistration.create(newUser,(err, newUser)=>{

        if(err) {
               errors.push({'control ypur data'})
               res.Json({
                   status:'error',
                   errors
                }) 
            }
        else{
            res.Json({
                status:'success',
                 newUserData:newUser   
            })
        }

    })
}