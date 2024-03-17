function Sidebar({ changeoption }) {
  return (
    <>
      <div className=" w-1/5 h-full bg-black ">
        <p
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
          onClick={() => {
            changeoption("analytics")
          }}
        >
          Home
        </p>
        <p
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
          onClick={() => {
            changeoption("addproducts")
          }}
        >
          Add Products
        </p>
        <p
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
          onClick={() => {
            changeoption("inventory")
          }}
        >
          Inventory Mangement
        </p>
        <p
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
          onClick={() => {
            changeoption("orders")
          }}
        >
          Order Mangement
        </p>
      </div>
    </>
  );
}

export default Sidebar;
