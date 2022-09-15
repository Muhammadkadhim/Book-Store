export default function Container({ children }) {
    return (
        <div className="container w-12/12 md:w-10/12 mx-auto min-h-screen">
            {children}
        </div>
    );
}
