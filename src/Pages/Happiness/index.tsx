import smile from "../../assets/Rectangle 79.png"
import { SectionHappiness } from "./style"

export const Happiness = () => {
    return (
        <SectionHappiness>
            <div>
                <div>
                    <p>
                        <h2>Pra brilhar no verão</h2>
                        <h3>As Sandálias Birkens são uma escolha de calçado atemporal e icônica,
                            conhecida por seu conforto, qualidade e design diferenciado.</h3>
                    </p>
                    <button>É a minha cara </button>
                </div>
                <div>
                    <img src={smile} alt="Imagem de uma garota dentro de um carrinho de compras sorrindo" />

                </div>
            </div>
        </SectionHappiness>
    )
}