import { useState } from 'react';
import './colorpicker.css';
export default function ColorPicker({
  colors,
  handleColorSelect,
  selectedColor,
  setSelectedColor,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  //   onSelect(color);
  //   setIsOpen(false);
  // };
  return (
    <div className="dropdown-color-picker">
      <div
        className="selected-color"
        // onClick={toggleDropdown}
        style={{ backgroundColor: selectedColor }}
      >
        {/* {isOpen && (
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}
