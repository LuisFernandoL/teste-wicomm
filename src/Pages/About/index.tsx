import { Footer } from "../../Components/Footer"
import img from "../../assets/image 53.png"
import { DivStyleRegister, SectionAbout } from "./style"

export const About = () => {
    return (
        <>
            <SectionAbout>
                <div className="divAbout">
                    <span>
                        <h2>Sobre a Sapatella</h2>
                        <h3>
                            Oi, a gente já se conhece? Muito prazer, Sapatella!
                            Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar.
                            Aqui tem atenção de verdade, produtos com o seu jeito e ritmo. Chega mais, fique à vontade.
                            Queremos ver você confortável e livre para ser como quiser e ocupar o espaço que bem entender.
                            O que nos une e contagia é a vontade de brilhar e ser feliz. Mais que mulheres, somos amigas.
                            Sapatella. Vamos juntas?
                        </h3>
                    </span>
                </div>
                <div className="divImgAbout">
                    <img src={img} alt="" />
                </div>
            </SectionAbout>
            <DivStyleRegister>
                <p>
                    <h1>Cadastre-se e ganhe <span >R$20 OFF</span> na sua primeira compra!</h1>
                </p>
                <div>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <button>Cadastrar</button>
                </div>
            </DivStyleRegister>
            <Footer />
        </>
    )
}