import { MainHome } from "./Pages/Home"
import GlobalStyle from "./Styles/global"
import Reset from "./Styles/reset"

export const App = () => {

  return (
    <>
      < GlobalStyle />
      <Reset/>
      <MainHome/>
    </>
  )
}

export default App
