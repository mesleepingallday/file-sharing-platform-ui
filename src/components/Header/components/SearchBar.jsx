export default function SearchBar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row w-[500px] justify-between bg-white px-5 py-2 rounded-lg text-[#364670]">
        <div className="flex flex-row">
          <i className="ri-search-2-line" />
          <input
            type="text"
            placeholder="Search"
            className="ms-4 bg-inherit focus:outline-none focus:ring-0 focus:border-transparent"
          />
        </div>
        <i className="ri-equalizer-line" />
      </div>
      <div className="flex gap-2">
        <button>
          <i className="ri-notification-3-line" />
        </button>
        <button>
          <i className="ri-message-3-line" />
        </button>
        <button>
          <i className="ri-menu-line" />
        </button>
      </div>
    </div>
  );
}
