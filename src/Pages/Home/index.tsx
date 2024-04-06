import { About } from "../About"
import { Category } from "../Category"
import { FavoritesOfTheWeek } from "../FavoritesOfTheWeek/FavoritesOfTheWeek"
import { Happiness } from "../Happiness"
import { PageHome } from "../Main"
import { MoreOptions } from "../MoreOptions"
import { RasteirasBirkens } from "../Rasteiras&Birkens"

export const MainHome = () => {
    return (
        <>
            <main>
                <PageHome />
                <Category />
                <Happiness />
                <FavoritesOfTheWeek />
                <RasteirasBirkens />
                <MoreOptions />
                <About />
            </main>
        </>
    )

}