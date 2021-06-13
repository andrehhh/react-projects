import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

	const [submenu, setSubmenu] = useState({isOpen: false, sublink: sublinks[0], coordinates:{}})
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const openSubmenu = (page, coordinates) => {
		const sublink = sublinks.find((sublink) => sublink.page === page)
		setSubmenu({isOpen: true, sublink, coordinates})
  };

	const closeSubmenu = () => {
		setSubmenu({...submenu, isOpen: false})
	}

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<AppContext.Provider 
			value={{sublinks, submenu, isSidebarOpen, openSubmenu, closeSubmenu, toggleSidebar}}>
			{children}
		</AppContext.Provider>
	)
}

// Custom hook
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }