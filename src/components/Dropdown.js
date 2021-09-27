import React, { useState } from "react";

import '../styles/Dropdown.css'

const Dropdown = ({
                      selectValue,
                      handleSelectChange,
                      selectLabel,
                      selectList,
                      selectName,
                      isOpen,
                      handleOpen,
                  }) => {
    const [activeDescendant, setActiveDescendant] = useState(
        `option-${selectValue.text}`
    );

    return (
        <div className="dropdown-wrapper">
            <label htmlFor={`${selectName}-btn`} className="dropdown-label">
                {selectLabel}
            </label>
            <span
                className="dropdown"
                id={`${selectName}-btn`}
                onClick={() => handleOpen(selectName)}
                tabIndex="0"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={`${selectName}-menu`}
                aria-activedescendant={activeDescendant}
                aria-labelledby={activeDescendant}
                aria-haspopup={true}
            >
        <span>{selectValue.text}</span>
        <img src="../../public/images/down-arrow.png" alt="" className="dropdown-btn" />
      </span>
            <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
                <ul className="dropdown-list" id={`${selectName}-menu`}>
                    {selectList.map((elt) => (
                        <li
                            key={elt.value}
                            value={elt}
                            onClick={() => {
                                handleSelectChange(selectName, elt);
                                setActiveDescendant(`option-${elt.text}`);
                                handleOpen(selectName);
                            }}
                            id={`option-${elt.text}`}
                            className="dropdown-option"
                            tabIndex="-1"
                        >
                            {elt.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};