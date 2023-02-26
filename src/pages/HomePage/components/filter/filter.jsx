import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCard from "../../../../components/common/FilterCard/FilterCard";
import { cartAction } from "../../../../store/slices/cartSlice";
import { filterAction } from "../../../../store/slices/filterSlcie";
import { motion } from "framer-motion";
import "./filter.scss";



const Filter = (props) => {
  const [selectionAtive, setSelectionActive] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector((state) => {
    const data = {item: state.cart.items, quantity : state.cart.quantity, totalAmount : state.cart.totalAmount}
    return data
  })

  console.log(items)

  const filteredProducts = useSelector((state) => {
    const data = state.filter.items.filter((product) =>
      product.type.includes(state.filter.searchItem)
    );
    return data;
  });

  /////// the renderd items for the filter selctions rendered in a map
  ///// the tabs for the selections for the items such as best sellers or arricals or hot sales
  const renderedSelections = props.filterSelections.map((selection, index) => {
    const checkActive = index === selectionAtive;

    const handleClick = () => {
      setSelectionActive(index);
      dispatch(filterAction.filterProducts(selection.dataFilter));
    };

    return (
      <li
        key={selection.id}
        onClick={handleClick}
        className={checkActive ? "text-black" : ""}
        data-filter={selection.dataFilter}
      >
        {selection.name}
      </li>
    );
  });

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////// here is the filtered items and the data should passed through the components

  const addCartHandle = (item) => {
    dispatch(cartAction.addItem({
      price : item.price,
      image : item.image,
      name : item.name,
      id: item.id,
      amount : 1
    })
   
   )
  
  }

  const renderdFilteredItems = filteredProducts.map((item, index) => {
    return (
      <motion.div
        
        transition={{ ease: "easeOut", duration: 2 }}
        className="col-lg-3 col-md-6 col-sm-6 col-6"
        data-number={item.id}
        key={index}
      >
        <FilterCard image={item.image} name={item.name} price={item.price} onClick={() => addCartHandle (item)}/>
      </motion.div>
    );
  });
  ////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="filter_Holder mt-5 mb-5">
          <div className="filter_holder_selection">
            <ul className="list-style p-0 m-0 d-flex justify-content-center">
              {renderedSelections}
            </ul>
          </div>
          <div className="filter_holder_items">
            <div className="row">{renderdFilteredItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
