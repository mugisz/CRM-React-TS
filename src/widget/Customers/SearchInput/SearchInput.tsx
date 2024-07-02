import React from "react";
import style from "../../../screens/Customers/main.module.scss";

interface SearchInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  searchIcon: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  inputValue,
  setInputValue,
  searchIcon,
}) => {
  return (
    <div className={style.customerHeader_inputBlock}>
      <img src={searchIcon} alt="search " />
      <input
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
