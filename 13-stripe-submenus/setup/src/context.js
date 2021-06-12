import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

	const [submenu, setSubmenu] = useState({isOpen: false, page: ''})
	const [showSidebar, setShowSidebar] = useState(false)

	const openSubmenu = (page) => {
		setSubmenu({isOpen: true, page})
	}

	const closeSubmenu = (page) => {
		setSubmenu({isOpen: false, page})
	}

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<AppContext.Provider 
			value={{sublinks, submenu, showSidebar, openSubmenu, closeSubmenu, toggleSidebar}}>
			{children}
		</AppContext.Provider>
	)
}

// Custom hook
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }