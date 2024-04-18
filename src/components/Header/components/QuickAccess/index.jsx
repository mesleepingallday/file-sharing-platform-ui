import Item from "./Item";
import { listItems } from "./helper";
export default function QuickAccess() {
  return (
    <div className="flex flex-col">
      <p className="text-slate-600 font-semibold text-xl">Quick Access</p>
      <div className="flex flex-row gap-10 ms-10 mt-5">
        {listItems.map((item) => (
          <Item key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}
