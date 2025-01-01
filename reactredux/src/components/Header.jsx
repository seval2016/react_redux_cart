import React from "react";
import { MdPostAdd } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3">
          <div className="text-3xl">React Uygulama</div>
          <div className="flex items-center gap-5">
            {/* Seçim ve Arama Alanı */}
            <div className="flex items-center gap-2">
              <select className="h-10 rounded-lg px-3 text-black" name="" id="">
                <option value="asc">Artan</option>
                <option value="desc">Azalan</option>
              </select>
              <input
                className="h-10 rounded-lg px-4 text-black"
                type="text"
                placeholder="Arama Yapınız..."
              />
            </div>
            <div className="bg-blue-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <MdPostAdd size={24} />
            </div>
          </div>
        </div>
      );
};

export default Header;
