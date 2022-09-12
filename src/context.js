import React, { useState, useContext } from 'react'

const APPContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <APPContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebarOpen,
        isModalOpen,
      }}
    >
      {children}
    </APPContext.Provider>
  )
}
// custom hook
export const useGlobalContext = () => {
  return useContext(APPContext)
}
export { APPContext, AppProvider }
