
import { Link } from 'react-router-dom';
import './Accordion.scss'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';




const Accordion = (props) => {
    
    ///// set a state for expanded variable

    const [expanded, setExpanded] = useState(false)

   

    const renderedAccordions = props.items.map((item,index) => {

        //////// rendered the filter list
         /////// expanded functiion clikc
    const expandedHolder = (newindex) => {
        if(expanded === newindex) {
            return setExpanded(null)
        } 
         setExpanded(newindex)
        

        console.log(expanded)
    }


        const renderedList = item.items.map((listItem) => {
            return (
                <li key={listItem.id}>{listItem.type}</li>
            )
        })

        /////////////////////////////////
      
        return (
            
            <div className='accordion_holder' key={item.id} >
                <div className='accordion_holder_title d-flex' onClick={() => expandedHolder(index)}>
                <Link to='' className='black-links' >
                   {item.title}
                </Link>
                <span>
                    {expanded === index ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                </span>
            </div>
            {expanded === index ? <div className='accordion_holder_list'>
                <ul className='list-style'>
                    {renderedList}
                </ul>
            </div> : ""}
            </div>
        )
    })

    return (
        <div>
            {renderedAccordions}
        </div>
    )
}

export default Accordion