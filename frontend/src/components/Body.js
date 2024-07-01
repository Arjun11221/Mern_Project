import RestaurentCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useListOfRes from "../utils/useListOfRes";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:4000/api/v1/adminData"
    );
    const json = await data.json();
    
    console.log(json.data);
    setListOfRes(
      json?.data
    );
    setFilterRes(
      json?.data
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline Check Your Internet Connection...</h1>;
  }

  const { setName, logedIn } = useContext(UserContext);

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex p-4 m-4 items-center justify-center gap-4 text-black font-medium">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-black rounded-md outline-none w-96 h-10 p-2 "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className=" px-4 py-2 bg-purple-400 rounded-lg   "
          onClick={() => {
            const searchList = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterRes(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex">
        <div className=" justify-start mx-4 ">
          <button
            data-testid="top"
            className="px-4 py-3 bg-zinc-800 rounded-lg text-white "
            onClick={() => {
              const filterList = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRes(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="justify-start">
          <label>Name </label>
          <input
            className="p-2 border border-black outline-none rounded-md"
            value={logedIn}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filterRes?.map((restaurent) => (
          <Link
            to={"/restaurant/" + restaurent.productId}
            key={restaurent.productId}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
