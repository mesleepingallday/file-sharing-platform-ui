import React from "react";

export default function Recent() {
  return (
    <div className="flex flex-col">
      <p className="text-slate-600 font-semibold text-xl">Quick Access</p>
      <p className="text-slate-600 font-semibold text-xl">Recent</p>
      <div className="grid gap-2 grid-cols-1 grid-rows-4 bg-red-300">
        <div className="flex flex-row items-center gap-2">
          <div className="w-1/4 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-row gap-1">
            <p className="text-slate-600 font-semibold text-lg">File Name 1</p>
            <p className="text-slate-600 font-semibold text-lg">Date</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1/4 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 font-semibold text-lg">File Name 2</p>
            <p className="text-slate-600 font-semibold text-sm">Date</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1/4 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 font-semibold text-lg">File Name 3</p>
            <p className="text-slate-600 font-semibold text-sm">Date</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1/4 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 font-semibold text-lg">File Name 4</p>
            <p className="text-slate-600 font-semibold text-sm">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
