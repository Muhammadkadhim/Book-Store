import { Navbar, Footer } from "../components";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="my-24">{children}</main>
            <Footer />
        </>
    );
}
