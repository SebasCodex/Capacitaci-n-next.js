import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ background: "#222", padding: "10px" }}>
            <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0 }}>
                <li><Link href="/" style={{ color: "#fff" }}>Inicio</Link></li>
                <li><Link href="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
                <li><Link href="/projects" style={{ color: "#fff" }}>Proyectos</Link></li>
                <li><Link href="/students" style={{ color: "#fff" }}>Estudiantes</Link></li>
            </ul>
        </nav>
    );
}