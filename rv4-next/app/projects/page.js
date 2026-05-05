import Link from "next/link";

export default function Projects() {
    const projects = ["rv4", "reflexoperu"];

    return (
        <div>
            <h1>Proyectos</h1>

            <div style={{ marginTop: "10px" }}>
                {projects.map((p) => (
                    <div key={p}>
                        <Link href={`/projects/${p}`} style={{ color: "#4ea1ff" }}>
                            {p}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}