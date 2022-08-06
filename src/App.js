import { Container } from "./containers";
import { Home, Register, Login } from "./pages";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Search from "./pages/search/Search";

function App() {
    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/search" element={<Search />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </Container>
    );
}

export default App;
