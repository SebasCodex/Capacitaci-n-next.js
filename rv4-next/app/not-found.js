import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404</h1>
            <p>Esta página no existe en RV4</p>
            <Link href="/" style={{ color: "#4ea1ff" }}>
                Volver al inicio
            </Link>
        </div>
    );
}