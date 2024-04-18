export default function Item({ props }) {
  const { icon, name, currentNumber, maxNumber, iconStyle } = props;
  return (
    <div className="flex flex-col gap-2 px-4 py-2 items-center bg-white text-black shadow-lg rounded-lg cursor-pointer w-1/5 justify-center hover:shadow-none hover:border hover:border-[#999] transition-all duration-300 ease border border-transparent">
      <i className={`text-4xl rounded-2xl p-2.5 ${iconStyle} ${icon}`} />
      <p className="text-lg font-medium text-[#364670] mx-4 mb-2">{name}</p>
      <p className="text-[14px] text-[#999]">
        {currentNumber}/{maxNumber} files
      </p>
    </div>
  );
}
