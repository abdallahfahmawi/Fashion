import React, { useState } from "react";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import "./DropDown.scss"


const Dropdown = (props) => {


const [isOpen, setIsOpen] = useState(false)


///// handle the options when click the drop down/////

const handleClick = () => {
    setIsOpen(!isOpen)
}

const handleOptionClick = (option) => {
    setIsOpen(false)
    props.onChange(option)
}
////////////////////////////////////////

////// rendered options that prop from parent page

const renderedOptions = props.options.map((option) => {
    return (
        <div className="dropdown_holder_optionholder_options" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    )
})



////////////////////////////////////////////


    return (
        <div className={`dropdown_holder ${props.children}`} onClick={handleClick}>
            {props.value?.value || props.value} 
            <span>
            {isOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}
            </span>
            {isOpen && <div className="dropdown_holder_optionholder">{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown