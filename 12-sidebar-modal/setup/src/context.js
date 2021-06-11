import React, { useState, useContext } from 'react'

// Create Context
const AppContext = React.createContext()

const AppProvider = ({children}) => {

	const [showSidebar, setShowSidebar] = useState(false)
	const [modal, setModal] = useState({status: false, msg:'Modal Context'}) // Modal status & content

	// Sidebar show/hide
	const toggleSidebar = () => {
	setShowSidebar(!showSidebar)
	}

	// Modal show/hide
	const toggleModal = (msg) => {
		if(msg) {
				setModal({status: !modal.status, msg})
		} else {
				setModal({status: !modal.status, msg:'Modal Context'})
		}
	}

	// AppContext Provider value is an array of states/functions that we plan to use globally
	return (
		<AppContext.Provider 
			value={{showSidebar, modal, toggleSidebar, toggleModal}}>
			{children}
		</AppContext.Provider>
	)
}

// Custom Hook, reduces imports in other components
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}