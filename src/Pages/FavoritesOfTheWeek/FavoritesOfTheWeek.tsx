import { useEffect, useRef, useState } from "react"
import tennis from "../../assets/image 5.png"
import sandal from "../../assets/image 6.png"
import sneaker from "../../assets/image 7.png"
import platform from "../../assets/image 8.png"
import { SectionFavoritesOfTheWeek } from "./style"
import { IoHeartOutline } from "react-icons/io5";



export const FavoritesOfTheWeek = () => {
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
        <SectionFavoritesOfTheWeek>
            <div className="divTitle">
                <h2>Favoritos da Semana</h2>
            </div>


            <div className="divProducts">
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
                    <div className="divImgDiscount" >
                        <img src={sandal} alt="Imagem de um par de Sandália Soft Metalizado - Preta" />
                        <h4>36% OFF</h4>
                        <button className="btnHeart"><IoHeartOutline size={22} /></button>

                    </div>
                    <h3>Sandália Soft Metalizado - Preta</h3>
                    <p>
                        <h2>RS 169,90</h2>
                        <h2 ><span>R$ 209,90</span></h2>
                    </p>
                    <h3>ou 6x de R$ 28,31 sem juros</h3>
                </div>

                <div>
                    <div className="divImgDiscount" >
                        <img src={sneaker} alt="Imagem de um par de Sapatilha Elegance - Rose" />
                        <h4>36% OFF</h4>
                        <button className="btnHeart"><IoHeartOutline size={22} /></button>

                    </div>

                    <h3>Sapatilha Elegance - Rose</h3>
                    <p>
                        <h2>RS 169,90</h2>
                        <h2><span>R$ 209,90</span></h2>
                    </p>
                    <h3>ou 6x de R$ 28,31 sem juros</h3>
                </div>
                <div>
                    <div className="divImgDiscount" >
                        <img src={platform} alt="Imagem de um par de Plataforma em Nobuck - Whisky" />
                        <h4>36% OFF</h4>
                        <button className="btnHeart"><IoHeartOutline size={22} /></button>

                    </div>

                    <h3>Plataforma em Nobuck - Whisky</h3>
                    <p>
                        <h2>RS 169,90</h2>
                        <h2><span>R$ 209,90</span></h2>
                    </p>
                    <h3>ou 6x de R$ 28,31 sem juros</h3>
                </div>
            </div>


        </SectionFavoritesOfTheWeek>
    )
}