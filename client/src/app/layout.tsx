import type { Metadata } from 'next'
import StyledComponentsRegistry from './registy'

export const metadata: Metadata = {
  title: "Fastify",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
