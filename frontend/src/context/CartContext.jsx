import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  items: [], // { id, title, price, qty, img }
  totalQty: 0,
  totalPrice: 0,
};

function calcTotals(items) {
  const totals = items.reduce(
    (acc, it) => {
      acc.totalQty += it.qty;
      acc.totalPrice += Number(it.price) * it.qty;
      return acc;
    },
    { totalQty: 0, totalPrice: 0 }
  );
  return totals;
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, qty = 1 } = action.payload;
      const exists = state.items.find((i) => i.id === product.id);
      let newItems;
      if (exists) {
        newItems = state.items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      } else {
        newItems = [...state.items, { ...product, qty }];
      }
      const totals = calcTotals(newItems);
      return { ...state, items: newItems, ...totals };
    }
    case "REMOVE_ITEM": {
      const id = action.payload.id;
      const newItems = state.items.filter((i) => i.id !== id);
      const totals = calcTotals(newItems);
      return { ...state, items: newItems, ...totals };
    }
    case "UPDATE_QTY": {
      const { id, qty } = action.payload;
      const newItems = state.items
        .map((i) => (i.id === id ? { ...i, qty } : i))
        .filter((i) => i.qty > 0);
      const totals = calcTotals(newItems);
      return { ...state, items: newItems, ...totals };
    }
    case "CLEAR_CART":
      return { ...initialState };
    case "SET_FROM_STORAGE":
      return { ...state, ...action.payload };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("hc_cart_v1", JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  // load from storage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem("hc_cart_v1");
      if (raw) {
        dispatch({ type: "SET_FROM_STORAGE", payload: JSON.parse(raw) });
      }
    } catch (e) {}
  }, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error("useCartState must be used within CartProvider");
  return ctx;
}
export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error("useCartDispatch must be used within CartProvider");
  return ctx;
}
