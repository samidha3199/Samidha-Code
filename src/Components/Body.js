import RestaurantCard from "./RestaurantCards"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";

// Body Component 

const Body = ()=>{

    const [listofRestaurants, setlistofRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("Body Rendered!");

    // Conditional Rendering and use ternory operator.

    return listofRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <>
            <div className="container body__container">
                <div className="filter__search-container">
                    <button onClick={()=>{
                        let filtered_list = listofRestaurants.filter((restaurants)=>{
                            return restaurants.info.avgRating > 4
                        })
                        setlistofRestaurants(filtered_list);
                    }}>
                        Top Rated Restaurant
                    </button>
                    <div className="search__Input">
                        <input value={searchText} onChange={(e)=>{
                                setSearchText(e.target.value)
                            }
                        } type="text" className="search__input" placeholder="Search for restaurants"/>
                        <button onClick={()=>{
                            console.log(searchText)
                        }}>Search</button>
                    </div>
                </div>
                <div className="restaurant__container">
                    {
                        listofRestaurants.map((items)=>{
                            return (
                                <RestaurantCard key = {items.info.id} resData={items}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Body