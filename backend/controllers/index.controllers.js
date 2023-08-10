const ContactServices = require('../services/index.services')
const ContactServiceInstance = new ContactServices()
const postcontact = async(req,res)=>{
    let obj ={
        "contact": {
           "primaryContactId": null,
           "emails":[],
           "phoneNumbers":[],
           "secondaryContacts":[]
        }
    }
    try{
       
        const checkuser = await ContactServiceInstance.check(req.body) 
      let emailuser=[]
      let secondaryid = []
      const dup = []
      const sec = []
       
        if(checkuser){
            console.log(checkuser.id,"checkuserid")
            const newid = checkuser.id
            // obj.contact.secondaryContacts.push(newid)
            if(checkuser.precedence==='primary'){
                emailuser.push(checkuser.email)
                dup.push(checkuser.id)
            }
            else{
                sec.push(checkuser.id)
                obj.contact.secondaryContacts.push(newid)
                emailuser.push(checkuser.email)
            }
            emailuser.push(req.body.email)
            
        }

        obj.contact.primaryContactId = dup
        obj.contact.emails=emailuser
        obj.contact.phoneNumbers=checkuser.phoneno
        obj.contact.secondaryContacts=dup
        res.status(201).send(obj)
        }catch(error){
        console.log(error)
    }
}

const postuser =async(req,res)=>{
    try{
        const checkuser = await ContactServiceInstance.check(req.body) 
        // const{id,phoneno,email} = req.body
        let user
        if(checkuser){
            user = await ContactServiceInstance.createsec(req.body )
        }
        else{
            user = await ContactServiceInstance.createpri(req.body)
        }
        res.status(200).send(user)
    }catch(error){
    console.log(error)
    }
}

module.exports = {postcontact,postuser}