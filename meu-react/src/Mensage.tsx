function Mensage(){
    let nome= ""

    if (nome){
        return <h1>ola{nome}</h1>
        
    }
    return(
        <div>
            <h1>Olá, mundo!</h1>
            <p>Bem-vindo ao meu aplicativo React.</p>
        </div>
    )
}
export default Mensage;