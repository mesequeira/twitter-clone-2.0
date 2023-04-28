import { routes } from "@/utilities/routes"
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hola mundo</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
