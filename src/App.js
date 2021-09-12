import GlobalStyles, {Layout} from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
    return (
        <Layout>
            <Header/>
            <Home/>
            <GlobalStyles/>
        </Layout>
    );
}

export default App;
