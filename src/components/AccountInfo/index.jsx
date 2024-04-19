import AvailableSpace from "./components/AvailableSpace";
import BuyPremium from "./components/BuyPremium";
import Login from "./components/Login";
import NewUpload from "./components/NewUpload";

export default function AccountInfo() {
  return (
    <div className="mr-5">
      <Login />
      <AvailableSpace />
      <NewUpload />
      <BuyPremium />
    </div>
  );
}
