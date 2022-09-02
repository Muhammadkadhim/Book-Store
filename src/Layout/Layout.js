import { Navbar, Footer } from "../components";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="my-16">{children}</main>
            <Footer />
        </>
    );
}
