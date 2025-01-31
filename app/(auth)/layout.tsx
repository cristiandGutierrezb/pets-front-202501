
export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="http://localhost:3000/login" />
      </head>
      <body>
        <main className="flex gap-10 justify-between h-full bg-slate-300">
          <section className="flex-1 bg-red-400 h-full">This is the AuthLayout</section>
          <section className="flex-1 h-full">
            { children }
          </section>
        </main>
      </body>
    </html>
  );
}