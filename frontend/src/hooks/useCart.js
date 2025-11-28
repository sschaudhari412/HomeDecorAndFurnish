import { useCartState, useCartDispatch } from "../context/CartContext";

export default function useCart() {
  const state = useCartState();
  const dispatch = useCartDispatch();

  const addItem = (product, qty = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { product, qty } });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clear = () => dispatch({ type: "CLEAR_CART" });

  return { state, addItem, removeItem, updateQty, clear };
}
