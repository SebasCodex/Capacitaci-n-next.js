import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {

  title: "RV4 Dashboard",

  description: "Panel de gestión RV4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#111", color: "#eee" }}>
        <Navbar />
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}