import creeps from "../../assets/image 16.png"
import sandal from "../../assets/image 12.png"
import tennis from "../../assets/image 14.png"
import { SectionRasteirasBirkens } from "./style"
import { BsArrowRight } from "react-icons/bs";

export const RasteirasBirkens = () => {
    return (
        <SectionRasteirasBirkens>
            <div>
                <div className="divMain">
                    <div className="divContainer1">
                        <h1> Rasteiras &  Birkens </h1>
                        <p>
                            <h3>A categoria de Sandália Rasteira da Sapatella é um verdadeiro
                                paraíso para os amantes de conforto e estilo.</h3>
                        </p>
                        <div className="divButtonAndImg">
                            <button className="bntGo">Eu quero <BsArrowRight size={16} /> </button>
                            <img src={creeps} alt="Imagem de uma pessoa unsando sandalias brancas" />
                        </div>
                    </div>
                    <div className="divImg">
                        <img src={sandal} alt="Imagem de uma pessoa usando sandalias rosas" />
                    </div>
                    <div className="divContainer2">
                        <img src={tennis} alt="Imagem de uma pessoa usando tenis brancos" />
                        <span>
                            <h1>Tênis</h1>
                            <h2 className="textTenis">Os tênis femininos se tornaram um item básico
                                na moda e nos calçados do dia a dia.</h2>
                        </span>
                    </div>
                </div>
            </div>
            <div className="divButtons">
                <div className="divBtnSandal">
                    <button className="btnSandal">Sandalias <BsArrowRight size={16} /></button>
                </div>
                <div className="divBtnConferir">
                    <button className="btnCheck"> Conferir <BsArrowRight size={16} /></button>
                </div>
            </div>
        </SectionRasteirasBirkens>
    )
}