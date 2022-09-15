import { Navbar, Footer } from "../components";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="my-16">{children}</main>
            <Footer />
        </div>
    );
}
