import React from "react";
import { SearchForm } from "../search-form";
import Notification from "./Notification";
import User from "./User";

export default function SearchMenu() {
  return (
    <>
      {" "}
      <div className="flex gap-5 items-center justify-between bg-white p-4 rounded-full shadow-gray-200 shadow-none outline hover:border-none hover:shadow-lg transition-all duration-200 ease-in">
        <SearchForm className="flex-1/3" />
        <div className="flex items-center gap-5">
          <Notification />
          <User />
        </div>
      </div>
    </>
  );
}
