import Avatar from '../Avatar/Avatar';
import './Cabecalho.css'

const Cabecalho = ()  => {

    return ( 
    <header>
        <img src="/vite.svg"/>
        <a href="">Inicio</a>
        <a href="">Sobre</a>
        <a href="">Cadastrar</a>
        <a href="">Contato</a>
        <button>Login</button>
        <Avatar nome= 'Diogo Palhano'/>
    </header>
    )
};

export default Cabecalho;