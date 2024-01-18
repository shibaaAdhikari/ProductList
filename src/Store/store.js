// store.js
import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  selectedCategory: null,
  fetchData: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      set(() => ({ data: jsonData.products }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  setCategory: (category) =>
    set((state) => ({ ...state, selectedCategory: category })),
  getFilteredProducts: () => {
    const { data, selectedCategory } = useStore.getState();

    if (!selectedCategory) {
      return data;
    }

    const filteredProducts = data.filter(
      (product) => product.category === selectedCategory
    );

    return filteredProducts;
  },
 
}));
