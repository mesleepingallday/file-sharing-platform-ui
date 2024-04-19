import avatar from "../mesleepingallday.jpg";

export default function Login() {
  return (
    <div className="flex flex-row mt-10 items-center justify-between shadow-lg p-2 rounded-lg">
      <div className="flex flex-row items-center">
        <img src={avatar} alt="avatar" className="w-12 rounded-full" />
        <div className="flex flex-col ms-2">
          <p className="text-black font-bold">Nguyen Hoang Hai</p>
          <p className="text-gray-400">hainguyenfe@outlook.com.vn</p>
        </div>
      </div>
      <i className="ri-arrow-down-s-line text-black cursor-pointer" />
    </div>
  );
}
