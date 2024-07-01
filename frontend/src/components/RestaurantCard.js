import { IMG_URL } from "../utils/constant";

const RestaurentCard = ({resData})=>{
  console.log(resData);
    const {imageOfRes, name, cuisines, avgRating, areaName, deliveryTime} = resData;

    return (
      <div data-testid = "cards" className="m-4 p-4 w-64  bg-zinc-200 rounded-lg ">
        <img className="rounded-t-md" src={imageOfRes}/>
       <div className="">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating } Stars </h4>
        <h4>{deliveryTime} mins </h4>
        <h4>{areaName}</h4>
       </div>
      </div>
    )
}

// export const withPromotedLabel = (RestaurentCard)=>{
//   return ()=>{
//     return(
//       <div>
//         <label>Promoted</label>
//         <RestaurentCard />
//       </div>
//     )
//   }
// }

  export default RestaurentCard;