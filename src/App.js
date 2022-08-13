import { Container } from "./containers";
import { Home, Register, Login, Search, Books } from "./pages";

import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { BookDetail } from "./components";

function App() {
    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/:category" element={<Books />} />
                    <Route
                        path="/:category/works/:bookId"
                        element={<BookDetail />}
                    />
                </Routes>
            </Layout>
        </Container>
    );
}

export default App;
