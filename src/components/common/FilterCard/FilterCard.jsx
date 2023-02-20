
import Button from "../Button/Button";

import "./FilterCard.scss";
import { motion } from "framer-motion"
import { AiOutlineStar } from "react-icons/ai";


const FilterCard = (props) => {

 


    


  return (
    <motion.div  transition={{ ease: "easeOut", duration: 1 }} animate={{opacity:1}} initial={{opacity:0}} exit={{opacity : 0}} className="product_item">
    <div className="product_item_pic position-relative">
      <img src={props.image} />
      
    </div>
    <div className="product_item_text">
      <h6>{props.name}</h6>
      <div className="product_item_text_ratig">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <h5>{props.price}</h5>
      <Button  buttonStyle="btn-transparent"  onClick={props.onClick}> + Add Cart</Button>
    </div>
  </motion.div >
  
  );
};

export default FilterCard;
