import Item from "./Item";
import { listItem } from "./helper";

const SidebarMenu = () => {
  const activeStyle = "text-[#1976d2]";
  return (
    <div className="flex flex-col gap-8 bg-white w-44 items-center justify-between h-full pt-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer mb-20 ps-2">
          My Docs
        </h1>
        <div className="flex flex-col gap-6 text-[#364670] transition-all duration-300 ease">
          {listItem.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="text-[#364670] mb-6">
        <Item icon="ri-logout-box-r-line" label="Sign Out" />
      </div>
    </div>
  );
};

export default SidebarMenu;
