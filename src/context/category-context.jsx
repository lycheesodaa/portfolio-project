import { createContext, useContext } from 'react'

const CategoryContext = createContext('Projects')

export const CategoryProvider = ({ category, children }) => (
  <CategoryContext.Provider value={category}>
    {children}
  </CategoryContext.Provider>
)

export const useCategory = () => useContext(CategoryContext)