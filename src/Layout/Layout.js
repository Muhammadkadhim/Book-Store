import { Navbar } from "../components";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="mt-24">{children}</main>
        </>
    );
}
