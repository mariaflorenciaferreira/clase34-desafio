function calculo(cant) {
    
    const numeros= new Map()
    for(let i=0; i < cant ; i++) {
        
        const numerosRandom=Math.floor(Math.random()*1000)+1
        const numerosObtenidos=numeros.get(numerosRandom) ?? 0 

        numeros.set(numerosRandom, numerosObtenidos+1)
    }

    
    return Array.from(numeros).sort((a,b)=>a[0]-b[0]).map( e => {return {numero:e[0], salio_veces:e[1]}})
}

process.on('message', cant => {
    let resultado= calculo(cant)
    resultado=JSON.stringify(resultado)

    

    process.send(`Numeros obtenidos: ${resultado}`)
    process.exit()
})

