const Item = ({ icon, label }) => {
  return (
    <div className="flex flex-row gap-2 hover:text-blue-600">
      <i className={`${icon} text-lg `} />
      <span className="text-base font-medium ">{label}</span>
    </div>
  );
};

export default Item;
