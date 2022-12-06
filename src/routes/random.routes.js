const Router = require('express').Router;
const router = Router();
const {fork}=require('child_process')


router.get('/', (req,res)=>{

    let cant=req.query.cant ||100000000
    
    // cant=JSON.stringify(cant)
    console.log(`cantidad a calcular ${cant}`)

    const computo = fork('./src/controllers/calculoRandom.controller.js')
    // console.log(computo)
    computo.send(cant)

    computo.on('message', (data) => {
        res.status(200).json(data)

    })
    computo.send(cant)
                

})

module.exports = router;