import React, { useContext, useState } from 'react';
import Dishescss from './Dishes.module.css';
import { assets, food_list, menu_list } from '../../../assets/assets';
import AddIcon from '../../FoodItem/AddIcon';
import { StoreContext } from '../../Context/StoreContext';

function Dishes() {

    const [foodList, setFoodList] = useState(food_list);
    const [filterStyle, setFilterStyle] = useState('');
    const {cartCount} = useContext(StoreContext);

    console.log(foodList)

    // function handleOnFilter(cat) {
    //     let foodItems = [];
    //     setFilterStyle(cat);

    //     food_list.filter((item) => {
    //         if (cat == item.category) {
    //             foodItems.push(item);
    //         }
    //     })
    //     setFoodList(foodItems);
    // }
    return (
        <div className={Dishescss.container}>
            <div className={Dishescss.explporeManuhead}>
                <h1>Explore our manu</h1>
                <p>choose from a diverse manu featuring delectable array of dishes.Our mission is to satisfy carvings and elevate your dining experince,One delicius meal at a time.</p>
            </div>
            <div className={Dishescss.category}>
                {menu_list.map((cat, index) => {
                    return <div key={index} onClick={()=>setFoodList(prev=>prev==cat.menu_name?'All':food_list)}
                        className={Dishescss.dishcat}>
                        <img className={filterStyle == cat.menu_name ? Dishescss.circle: ""} src={cat.menu_image} />
                        <p>{cat.menu_name}</p>
                    </div>
                })}
            </div>
            <hr />
            <h1>Top dishes near you</h1>
            <div className={Dishescss.dishesItem}>
                {foodList.map((foodItem, index) => {
                    return <div key={index} className={Dishescss.foodList}>
                        <img src={foodItem.image} />
                        <div className={Dishescss.addIcon}>
                             <AddIcon key={index}
                                      foodImage={foodItem.image}
                                      foodName={foodItem.name}
                                      foodPrice={foodItem.price}
                                      foodId={foodItem._id}/>        
                        </div>
                        <div className={Dishescss.foodName}>
                            <h2>{foodItem.name}</h2>
                            <img src={assets.rating_starts} />
                        </div>
                        <p>{foodItem.description}</p>
                        <h1>&#8377;{foodItem.price}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Dishes
