const { Contacts } = require("../models/index.models");

class ContactService {
  check = async (body) => {
    const { email, phoneno } = body;
    const contact = await Contacts.findOne({ phoneno });
    console.log(contact, "contact");
    return contact;
  };
  
  checkemail = async(body)=>{
    const{email} = body
    const contact = await Contacts.findOne({email})
    return contact
  }

  checkphone = async(body)=>{
    const {phoneno} = body
    const contact = await Contacts.findOne({phoneno})
    return contact
  }

  createsec = async (body) => {
    console.log(body.phoneno, "ph");
    const { phoneno, email,id } = body;
    console.log(phoneno, email);
    const contact = await Contacts.create({
      phoneno,
      email,
      id,
      precedence: "secondary",
  
    });
    return contact;
  };
  createpri = async (body) => {
   
    const { phoneno, email ,id} = body;
    const contact = await Contacts.create({
      phoneno,
      email,
      id,
      precedence: "primary",
     
    });
    return contact;
  };
}

module.exports = ContactService;
