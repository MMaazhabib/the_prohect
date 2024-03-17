import axios from "axios";
import { useEffect, useState } from "react";

function Product({ item }) {
  console.log(item.productname);
  console.log(item.productprice);
  console.log(item.productdescripton);
  return (
    <>
      <div className="w-1/5 bg-green-500 h-1/6 mx-5 my-5 py-2 px-5 rounded-2xl">
        <div className="w-full h-full flex flex-col ">
          <div className="flex justify-between">
            <p className="text-2xl ">{item.productname}</p>
            <p className="text-2xl ">{item.productprice}</p>
          </div>
          <p>{item.productdescripton}</p>
          <div className="flex justify-end">
            <button className="w-1/2 h-8 flex items-center">Edit</button>
            <button className="w-1/2 h-8 flex items-center">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
function Inventory() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data: products } = await axios.get(
      "http://localhost:3000/user/getAllProduct"
    );
    setProducts(products.response);
  };
  useEffect(() => {
    void getAllProducts();
  }, []);
  return (
    <>
      <div className="w-full h-full bg-yellow-200 flex flex-wrap py-2">
        {products != null ? (
          <>
            {products.map((item, index) => {
              return <Product item={item} key={index} />;
            })}
          </>
        ) : (
          <>
            <p>No Product Exists</p>
          </>
        )}
      </div>
    </>
  );
}
export default Inventory;
