import { Navbar, Footer } from "../components";
import ScreenSize from "../components/Debug";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="my-24">{children}</main>
            <Footer />
            <ScreenSize />
        </>
    );
}
