import imageHome1 from "../../assets/home1.png"
import imageHome2 from "../../assets/home 2.png"
import { Header } from "../../Components/Header"
import { SectionHomeinitial } from "./style"
import sandal from "../../assets/image 2.png"





export const PageHome = () => {
    return (
        <>
            <SectionHomeinitial>
                <Header />
                <div className="divMain">
                    <img className="imgBackground" src={imageHome2} alt="Imagem de uma moça em pé, da cintur apr " />
                    <img className="imgBackground" src={imageHome1} alt="Imagem de uma moça sentada na cadeira " />
                    <div className="divSandal">
                        <div className="divText">
                            <h1>#SuperBazar</h1>
                            <h2>até <span> 50%OFF</span></h2>
                        </div>
                        <img className="imgCheck" src={sandal} alt="" />
                        <button>Conferir</button>
                    </div>
                </div>
            </SectionHomeinitial>
        </>
    )
}