import SidebarMenu from "./components/SidebarMenu";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <SidebarMenu />
      <Header />
    </div>
  );
}

export default App;
