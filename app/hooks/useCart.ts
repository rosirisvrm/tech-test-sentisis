// import { useState } from "react";

// function useCart() {
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : {};
//   });

//   const addToCart = (eventId: string, units: number) => {
//     setCart((prevCart: any) => {
//       const updatedCart = { ...prevCart, [eventId]: units };
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (eventId: string) => {
//     setCart((prevCart: any) => {
//       const updatedCart = { ...prevCart };
//       delete updatedCart[eventId];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   return { cart, addToCart, removeFromCart };
// }

// export { useCart };
