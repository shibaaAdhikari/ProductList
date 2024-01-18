// store.js
import {create} from 'zustand';

export const useStore = create((set) => ({
  data: [],
  selectedCategory: null,
  fetchData: async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        console.log('API Response:', jsonData); // Log the API response
        set(() => ({ data: jsonData.products }));
        console.log('Data after setting:', useStore.getState().data); // Log the state after setting
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setCategory: (category) => set((state) => ({ ...state, selectedCategory: category })),
//   getFilteredProducts: () => {
//     const { data, selectedCategory } = useStore.getState();
//     if (!selectedCategory) {
//       return data;
//     }
//     return data.filter((product) => product.category === selectedCategory);
//   },
getFilteredProducts: () => {
    const { data, selectedCategory } = useStore.getState();
    
    // Log selectedCategory and data to check values
    console.log('Selected Category:', selectedCategory);
    console.log('All Products:', data);

    if (!selectedCategory) {
      return data;
    }

    const filteredProducts = data.filter((product) => product.category === selectedCategory);
    
    // Log filteredProducts to check the result
    console.log('Filtered Products:', filteredProducts);

    return filteredProducts;
  },
}));
