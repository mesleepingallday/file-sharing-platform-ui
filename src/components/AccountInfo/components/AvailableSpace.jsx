export default function AvailableSpace() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg mt-14">
      <div className="flex justify-center mt-4">
        <div
          className="flex flex-col items-center justify-center gap-[2px] mt-5 border-spacing-0.5 w-40 h-40 before:text-[22px] before:text-black before:font-bold before:content-['25%'] after:content-['used'] after:text-[13px] after:text-[#999]"
          style={{
            background:
              "radial-gradient(closest-side, #fff 79%, transparent 80% 100%), conic-gradient(#1976d2 25%, #e9e4ff 0%)",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div className="flex flex-col text-black ps-6 pt-6 pb-3">
        <p className="text-gray-500">
          <span className="text-black font-bold">750</span> GB Free /{" "}
          <span className="text-black font-bold">1</span> TB
        </p>
        <p className="text-gray-500 font-semibold">Available Storage</p>
      </div>
    </div>
  );
}
