import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Яндекс.Дом",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      {/* <html lang="en"> */}
      <body suppressHydrationWarning={true}>
        {children}

        <footer className="footer">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="/">
                Помощь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Обратная связь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Разработчикам
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Условия использования
              </a>
            </li>
          </ul>

          <div className="footer__copyright">© 1997–2023 ООО «Яндекс»</div>
        </footer>
      </body>
    </html>
  );
}
