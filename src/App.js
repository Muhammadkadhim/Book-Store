import { Container } from "./containers";
import { Home, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
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
