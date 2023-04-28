import { routes } from "@/utilities/routes"
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hola mundo</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              {routes.map(({id, label, path}) => (
                <li key={id}>
                  <Link href={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
