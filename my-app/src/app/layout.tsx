import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
          {/* Google Fonts link */}
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:ital,wght@0,400;1,400&display=swap"
            rel="stylesheet"
          />
        </head>
      <body>{children}</body>
    </html>
  );
}
