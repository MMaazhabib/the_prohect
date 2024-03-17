
import Addproducts from "./add_product";
import Analytics from "./analytics_mainContent";
import Inventory from "./invertory";
import Orders from "./orders";

function Home({option}) {
  
  return (
    <>
      <div className="w-4/5 h-full bg-gray-200 flex">
        {option == "analytics" && <Analytics  />}
        {option == "inventory" && <Inventory  />}
        {option == "addproducts" && <Addproducts  />}
        {option == "orders" && <Orders />}
      </div>
    </>
  );
}
export default Home;
