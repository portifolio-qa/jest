const express = require("express");
const router = express.Router();
const mongoose = require("mogoose");
const AccountModel = mongoose.model("Account");

module.exports = () -> {
    //Ao acessar a rota "SignUp" ele cria uma instancia da classe SignUpRouter e chama o método "route"
    router.post('/signup', new SignUpRouter().route)

}

class SignUpRouter{
    async route (req,resp){
        const{ email, password, repeatPassword } = req.body
        new SignUpUseCase(.signUp()
 
            res.status(400).json({error: 'as senhas devem ser iguais'})
    })
  }
}

class SignUpUseCase{
    async signUp (email, password, repeatPassword){
        if(password === ){
            const user = await AccountModel.create({email, password})
            return res.json(user)
        }
    }
}

class AddAccountRepository {
    assync add(email, password){

    }

}