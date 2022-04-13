
import Tshirt from './Tshirt'

export default function TshirtList() {

   const database = [
      {name: 'red tshirt', price: 10.99, id: 1},
      {name: 'yellow hoodie', price: 24.99, id: 2},
      {name: 'blue polo', price: 18.99, id: 3},
   ]
   return (
      <div>
         <h2>list</h2>
         {database.map((one) => (

            <Tshirt name={one.name} price={one.price} key={one.id} />
         ))}
      </div>
   )
}

// export default Tshirt 
