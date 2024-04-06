import img from "../../assets/Group 838.png"
import logoBlack from "../../assets/logo_SAPATELLA_preto 1.png"
import visa from "../../assets/Group 158.png"
import master from "../../assets/Mastercard.png"
import hiperCard from "../../assets/Group 161.png"
import pix from "../../assets/Group 743.png"
import amex from "../../assets/Group 147.png"
import elo from "../../assets/Group 144.png"
import ticket from "../../assets/Group 742.png"
import vtex from "../../assets/image 27.png"
import encrypt from "../../assets/Group 830.png"
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogo } from "react-icons/pi";
import { PiFacebookLogoLight } from "react-icons/pi";
import { StyledFooter } from "./style"


export const Footer = () => {
    return (
        <StyledFooter>
            <div className="divMain">
                <div className="divLogo">

                    <img src={logoBlack} alt="Logo sapatella na cor preta" />

                    <div className="divSocial">
                        <button><PiInstagramLogoLight size={24} /></button>
                        <button><PiWhatsappLogo size={24} /></button>
                        <button><PiFacebookLogoLight size={24} /></button>
                    </div>
                </div>

                <div className="divTypography">
                    <h1>SOBRE NÓS</h1>
                    <h2>Quem somos</h2>
                    <h2>Mapa do site</h2>
                    <h2>Casas Sapatella</h2>
                    <h2>Seja um parceiro</h2>
                    <h2>Seja um Franqueado</h2>
                    <h2>Seja um afiliado</h2>
                    <h2>Trabalhe com a gente</h2>
                </div>

                <div className="divTypography">
                    <h1>MINHA CONTA</h1>
                    <h2>Meus Dados</h2>
                    <h2>Meus Pedidos</h2>
                    <h2>Login</h2>
                </div>

                <div className="divTypography">
                    <h1>SUPORTE E POLÍTICAS</h1>
                    <h2>Trocas e Devoluções</h2>
                    <h2>Dúvidas Frequentes</h2>
                    <h2>Fale Conosco</h2>
                    <h2>Super Natal</h2>
                </div>

                <div className="divPayment">
                    <h1>FORMAS DE PAGAMENTO</h1>
                    <div className="divPaymentMethods">
                        <img className="imgPayment" src={visa} alt="Imagem logo do cartão Visa" />
                        <img className="imgPaymentMaster" src={master} alt="Imagem logo do cartão Mastercard" />
                        <img className="imgPayment" src={hiperCard} alt="Imagem logo do cartão Hipercard" />
                        <img className="imgPayment" src={pix} alt="Imagem ecrita Pix" />
                        <img className="imgPayment" src={amex} alt="Imagem logo do cartão Amex" />
                        <img className="imgPayment" src={elo} alt="Imagem logo do cartão Elo" />
                        <img className="imgPayment" src={ticket} alt="Imagem ilustrativa de um boleto" />
                    </div>

                    <h1>SEGURANÇA</h1>

                    <div className="divSecurity">
                        <img className="imgSecurity" src={vtex} alt="Imagem logo vtex junto com certificado" />
                        <img className="imgSecurity" src={encrypt} alt="Imagem escrita Let's Encrypt e um cadeado fechado " />

                    </div>
                </div>

            </div>
            <div className="divFooter">
                <div>
                    <h1 className="typography">Somos Sonho LTA - Estrada do Campo D'areia, 182 - Pechincha - Rio de Janeiro/RJ - CEP: 22.743-310</h1>
                    <h1 className="typography">CNPJ:28.445.729/0081-75 | © 2024 Todos dos direitos reservados</h1>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </StyledFooter>
    )
}