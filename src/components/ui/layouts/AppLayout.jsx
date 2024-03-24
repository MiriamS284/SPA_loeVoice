import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header className="h-14" />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer className="h-14" />
    </div>
  );
}

export default AppLayout;
