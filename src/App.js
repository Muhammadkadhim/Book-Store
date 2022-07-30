import { AppContainer } from "./containers";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
    return (
        <AppContainer>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </AppContainer>
    );
}

export default App;
