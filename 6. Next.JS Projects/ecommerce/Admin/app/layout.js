
import "./globals.css";


export const metadata = {
  title: "BookMerce Dashboard",
  description: "Admin dashboard of BookMerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
