import { Container } from "./containers";
import { Home, Register, Login, Search, Category } from "./pages";

import { Routes, Route } from "react-router-dom";
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
                    <Route path="/category/:category" element={<Category />} />
                    <Route
                        path="/category/:category/:work/:bookId"
                        element={<BookDetail />}
                    />
                </Routes>
            </Layout>
        </Container>
    );
}

export default App;
