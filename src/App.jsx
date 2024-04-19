import SidebarMenu from "./components/SidebarMenu";
import Header from "./components/Header";
import AccountInfo from "./components/AccountInfo";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <SidebarMenu />
      <Header />
      <AccountInfo />
    </div>
  );
}

export default App;
