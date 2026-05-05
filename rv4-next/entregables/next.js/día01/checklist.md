# ✅ Checklist de Cumplimiento — RV4

## 6.1 Estructura del proyecto

- [x] Existe carpeta `app/` en la raíz del proyecto (1 pt)
- [x] Existe `app/layout.js` con `export default function RootLayout` (1 pt)
- [x] Existe `app/page.js` (ruta `/`) (0.5 pt)
- [x] Existe `app/dashboard/page.js` (ruta `/dashboard`) (0.5 pt)
- [x] Existe `app/projects/page.js` (ruta `/projects`) (0.5 pt)
- [x] Existe `app/projects/[id]/page.js` (ruta dinámica) (1 pt)
- [x] Existe `app/students/page.js` (ruta `/students`) (0.5 pt)
- [x] Existe `app/not-found.js` (página 404) (1 pt)
- [x] NO existe ningún archivo de rutas tipo `routes.jsx` de React Router (1 pt)

---

## 6.2 App Router y navegación

- [x] Se usa `Link` de `next/link` (no `<a>` para navegación interna) (2 pt)
- [x] Navegar entre páginas NO recarga el browser (Network tab) (1 pt)
- [x] El layout (Navbar) se mantiene al cambiar de ruta (1 pt)
- [x] `/projects/rv4` muestra `"rv4"` (1 pt)
- [x] `/projects/cualquier-cosa` muestra el parámetro correcto (1 pt)
- [x] `/ruta-inexistente` muestra `not-found.js` (1 pt)

---

## 6.3 Calidad del código

- [x] Cada componente tiene un solo `export default` (1 pt)
- [x] No hay código comentado innecesario (0.5 pt)
- [x] Nombres consistentes (minúsculas o camelCase) (0.5 pt)
- [x] Repo en GitHub con mínimo 3 commits (2 pt)

---

