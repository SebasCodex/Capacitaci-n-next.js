export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                <div style={{ background: "#222", padding: "15px", borderRadius: "5px" }}>
                    <p>Proyectos</p>
                    <h2>12</h2>
                </div>

                <div style={{ background: "#222", padding: "15px", borderRadius: "5px" }}>
                    <p>Estudiantes</p>
                    <h2>30</h2>
                </div>

                <div style={{ background: "#222", padding: "15px", borderRadius: "5px" }}>
                    <p>Activos</p>
                    <h2>8</h2>
                </div>
            </div>
        </div>
    );
}