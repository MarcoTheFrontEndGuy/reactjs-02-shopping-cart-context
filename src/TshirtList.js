import Tshirt from "./Tshirt"


export const TshirtList = () => {
   const database = [
      { name: 'red tshirt', price: 10.99 , id: 1 },
      { name: 'yellow hoodie', price: 24.99 , id: 2 },
      { name: 'blue polo', price: 18.99 , id: 3 },
   ]
   return (
      <div>
         {database.map((ex) => (
            <Tshirt name={ex.name} price={ex.price} key={ex.id} />
         ))}
      </div>
   )
}