import { Container } from "./containers";
import { Home, About, Register, Login, Search, Books, Contact } from "./pages";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { BookDetail } from "./components";

function App() {
    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
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
