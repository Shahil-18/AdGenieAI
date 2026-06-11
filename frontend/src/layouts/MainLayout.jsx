import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;