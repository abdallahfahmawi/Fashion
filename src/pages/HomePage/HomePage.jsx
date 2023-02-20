
import { nanoid } from "@reduxjs/toolkit";
import Carousels from "../../components/carousel/carousel"
import Banner from "./components/banner/banner";
import Filter from "./components/filter/filter";
import LastNews from "./components/lastnews/LastNews";
import "./HomePage.scss";


const HomePage = () => {

////////// the list of the filters//// the items should be passed as a props or use contexts when connected an API
const selectionItems = [
    {name : "Best Sellers", id:nanoid(),dataFilter:"bestsellers"},
    {name :"New Arrivals",id:nanoid(),dataFilter:"newarrivals"},
    {name :"Hot Sales",id:nanoid(),dataFilter:"hotsales"}
]


/////////////////////////////////////
    


    return(
        <div>
            <Carousels />
            {/*second section*/}
           <Banner/>
            {/**end of the second section */}

            {/*Filter section*/}
            <Filter filterSelections={selectionItems}  />
            {/* End Filter section*/}

            {/*Last News section*/}
            <LastNews/>
        </div>
    )
}

export default HomePage