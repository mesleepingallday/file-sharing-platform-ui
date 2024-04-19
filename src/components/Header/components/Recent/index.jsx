import { listItemsNew } from "./helper";
export default function Recent() {
  return (
    <>
      <p className="text-slate-600 font-semibold text-xl">Recent</p>
      <div className="flex flex-col space-y-4 py-8 px-8 w-auto text-black bg-white shadow-lg rounded-xl cursor-pointer hover:shadow-none transition-all duration-300 ease">
        {listItemsNew.map((item) => {
          return (
            <div
              key={item.name}
              className="flex justify-between border border-transparent rounded-lg hover:bg-[#e6e4ec] py-3 pe-2"
            >
              <div className="flex-1">
                <i
                  className={` ${item.icon} text-2xl p-2 rounded-lg ${item.iconStyle}`}
                ></i>
              </div>
              <div className="flex-1 font-semibold">{item.name}</div>
              <div className="flex-1 text-gray-400">{item.extension}</div>
              <div className="flex-1 text-gray-400">{item.size} MB</div>
              <div className="text-xl ri-more-line"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
