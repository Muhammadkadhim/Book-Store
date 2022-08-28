import { Navbar, Footer } from "../components";
import ScreenSize from "../components/Debug";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="my-16">{children}</main>
            <Footer />
            <ScreenSize />
        </>
    );
}
