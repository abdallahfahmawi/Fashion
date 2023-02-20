import { nanoid } from '@reduxjs/toolkit';
import newsone from '../../assets/images/blog-1.jpg.webp';
import newstwo from '../../assets/images/blog-2.jpg.webp';
import newsthree from '../../assets/images/blog-3.jpg.webp';





const lastNewsData = [
    {
        tile : "What Curling Irons Are The Best Ones",
        image : newsone,
        id: nanoid(),
        date : "15 February 2020",
       
    },
    {
        tile : "Eternity Bands Do Last Forever",
        image : newstwo,
        id: nanoid(),
        date : "21 February 2020",
       
    },
    {
        tile : "The Health Benefits Of Sunglasses",
        image : newsthree,
        id: nanoid(),
        date : "28 February 2020",
       
    },
   
    
]

export default lastNewsData