import { useState } from "react";

const useDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState(0);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return { activeDropdown, toggleDropdown };
};

export default useDropdown;
