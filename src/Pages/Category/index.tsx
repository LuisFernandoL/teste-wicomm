import frete from "../../assets/frete.png"
import discount from "../../assets/discount.png"
import pix from "../../assets/pix.png"
import installment from "../../assets/installment.png"
import Scholarships from "../../assets/image 19.png"
import Tennis from "../../assets/image 20.png"
import Creeps from "../../assets/image 21.png"
import Platforms from "../../assets/image 22.png"
import Boots from "../../assets/image 23.png"
import BalletShoes from "../../assets/image 24.png"
import { SectionCategory } from "./style"



export const Category = () => {
    return (
        <SectionCategory>
            <div className="divPagament">
                <img src={frete} alt="" />
                <img src={discount} alt="" />
                <img src={pix} alt="" />
                <img src={installment} alt="" />
            </div>
            <div className="divCategorys">

                <h1>Compre por categoria</h1>
                <div className="divImgCategorys">
                    <div>
                        <img src={Scholarships} alt="Imagem de uma Bolsa Feminina" />
                        <h3>Bolsas</h3>
                    </div>
                    <div>
                        <img src={Tennis} alt=" Imagem de um Tenis Feminino" />
                        <h3>Tênis</h3>
                    </div>
                    <div>
                        <img src={Creeps} alt="Imagem de uma Rasteiras Feminina" />
                        <h3>Rasteiras</h3>
                    </div>
                    <div>
                        <img src={Platforms} alt="Imagem de uma Plataforma Feminina" />
                        <h3>Plataformas</h3>
                    </div>
                    <div>
                        <img src={Boots} alt="Imagem de uma Bota Feminina" />
                        <h3>Botas</h3>
                    </div>
                    <div>
                        <img src={BalletShoes} alt="Imagem de Sapatilha Feminina" />
                        <h3>Sapatilhas</h3>
                    </div>
                </div>
            </div>
        </SectionCategory>
    )
}