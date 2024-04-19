import SearchBar from "./components/SearchBar";
import QuickAccess from "./components/QuickAccess";
import Recent from "./components/Recent";
export default function Header() {
  return (
    <div className="flex flex-col gap-8  px-10 pt-10 w-3/4">
      <SearchBar />
      <QuickAccess />
      <Recent />
    </div>
  );
}
