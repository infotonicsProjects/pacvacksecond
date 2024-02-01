import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/admin/style/luno-style.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import LayoutforDesign from "./LayoutforDesign";
// import ProviderComponent from "@/store/provider";
export const metadata = {
  title: "PackVack  App",
  description: "Pack Vack Application Bag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      {/* <ProviderComponent> */}
      <LayoutforDesign children={children} />
      {/* </ProviderComponent> */}
    </html>
  );
}
