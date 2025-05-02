import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Cardiac Anesthesia World",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="nord" lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
