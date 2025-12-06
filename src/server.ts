import express from 'express'

let app = express()

app.use(express.json());

app.get("/", (req: any,res: any) =>{
	res.send("Server is running fine")
})

app.listen(3000, ()=>{
	console.log("Servidor rodando na porta 3000")
})
