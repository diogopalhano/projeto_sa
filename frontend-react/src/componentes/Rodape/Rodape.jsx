import './Rodape.css'

const Rodape = () => {

    const AnoAtual = new Date().getFullYear();



    return (

         <footer>
            <span className='texto-copyright'>

               Copyright © {AnoAtual} - Todos os direitos reservados -Diogo Palhano
         
            </span>
            
         </footer>
)
}

export default Rodape;