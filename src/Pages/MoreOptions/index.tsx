import happiness from "../../assets/image 15.png"
import tennis from "../../assets/image 5.png"
import sandal from "../../assets/image 6.png"
import img from "../../assets/image 52.png"
import { SectioMoreOptions } from "./style"
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react"


export const MoreOptions = () => {

    const [addToCar, setAddToCar] = useState(false)
    const [clickBtn, setClickBtn] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && containerRef.current.contains(event.target as Node)) {
                return;
            }

            setAddToCar(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleButtonClick = (sizeNumber: string) => {
        setClickBtn(sizeNumber);
    };

    return (
        <SectioMoreOptions>
            <div className="divMain">
                <div className="divImgSmile">
                    <img className="imgSmile" src={happiness} alt="Imagem de duas pessoas alegres sorrindo" />
                </div>
                <div className="divItens">
                    <div ref={containerRef}>
                        <div className="divImgDiscount">
                            <img
                                src={tennis} alt="Imagem de um par de Tênis Clean Urbano - Branco"
                                onClick={() => setAddToCar(!addToCar)} />
                            <h4>36% OFF</h4>
                            <button className="btnHeart"><IoHeartOutline size={22} /></button>
                            {addToCar && (
                                <>
                                    <button className="btnToCar" >Adionar à sacola</button>
                                    <div>
                                        <div className="divSize">
                                            <div className="sizeAndTypograph">
                                                <h1>Selecione um tamanho</h1>
                                                <div className="spanSize">
                                                    <button
                                                        className={`btnSizeNumber ${clickBtn === "34" && "clicked"}`}
                                                        onClick={() => handleButtonClick("34")}>
                                                        34
                                                    </button>
                                                    <button
                                                        className={`btnSizeNumber ${clickBtn === "35" && "clicked"}`}
                                                        onClick={() => handleButtonClick("35")}>
                                                        35
                                                    </button>
                                                    <button
                                                        className={`btnSizeNumber ${clickBtn === "36" && "clicked"}`}
                                                        onClick={() => handleButtonClick("36")}>
                                                        36
                                                    </button>
                                                    <button
                                                        className={`btnSizeNumber ${clickBtn === "37" && "clicked"}`}
                                                        onClick={() => handleButtonClick("37")}>
                                                        37
                                                    </button>
                                                    <button
                                                        className={`btnSizeNumber ${clickBtn === "38" && "clicked"}`}
                                                        onClick={() => handleButtonClick("38")}>
                                                        38
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                        <h3>Tênis Clean Urbano - Branco</h3>
                        <p>
                            <h2>RS 169,90</h2>
                            <h2 className="noDiscount"><span>R$ 209,90</span></h2>
                        </p>
                        <h3>ou 6x de R$ 28,31 sem juros</h3>
                    </div>
                    <div>
                        <div className="divImgDiscount">
                            <img src={sandal} alt="Imagem de um par de Sandália Soft Metalizado - Preta" />
                            <h4>36% OFF</h4>
                            <button className="btnHeart"><IoHeartOutline size={22} /></button>
                        </div>
                        <h3>Sandália Soft Metalizado - Preta</h3>
                        <p>
                            <h2>RS 169,90</h2>
                            <h2><span>R$ 209,90</span></h2>
                        </p>
                        <h3>ou 6x de R$ 28,31 sem juros</h3>
                    </div>
                </div>
            </div>
            <div className="divImg">
                <img src={img} alt="" className="imgGirls" />
            </div>
        </SectioMoreOptions>
    )
}