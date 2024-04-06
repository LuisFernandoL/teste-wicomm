import logoSapatella from "../../assets/logo_ SAPATELLA_branca 1.png"
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { ContainerHeader } from "./style";

export const Header = () => {
    return (
        <ContainerHeader>
            <p>
                <img src={logoSapatella} alt="Logo Sapatella" />
            </p>
            <h3>Novidades</h3>
            <h3>Sapatos</h3>
            <h3>Sandálias</h3>
            <h3>Tênis</h3>
            <h3>Bolsas & Acessórios</h3>
            <h2>OFF</h2>
            <input type="text" placeholder="Buscar" />
       
                <button><BsPerson size={24} /></button>
                <button><CiHeart size={24}/></button>
                <button><BsCart2 size={24}/></button>
         
        </ContainerHeader>
    )
}