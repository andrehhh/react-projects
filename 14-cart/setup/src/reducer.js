export default (state, action) => {
  // console.log(action)

	if(action.type === 'LOADING') {
		return {
			...state,
			isLoading: true
		}

	} else if(action.type === 'FETCH_DATA') {
		return {
			...state,
			cart: action.payload,
			isLoading: false
		}

	}else if(action.type === 'CHANGE_ITEM_AMOUNT') {
		const { id, change } = action.payload

		const newCart = state.cart.map((item) => {
			if(item.id === id) {
				if(change === 'INCREMENT') {
					return {...item, amount: item.amount + 1}
				} else if(change === 'DECREMENT') {
					return {...item, amount: item.amount - 1}
				}
			} else {
				return item
			}
		}).filter((item) => item.amount > 0) // Only allow items amount more than 0, remove otherwise.

		return {
			...state,
			cart: newCart
		}

	} else if(action.type === 'REMOVE_ITEM') {
		const newCart = state.cart.filter((item) => item.id !== action.payload)
		return {
			...state,
			cart: newCart
		}

	} else if(action.type === 'CLEAR_CART') {
		return {
			...state,
			cart: [],
			amount: 0,
			total: 0
		}

	} else if(action.type === 'GET_TOTALS') {
		
		// Reduce function that returns an object
		let { total, amount } = state.cart.reduce((total, item)=>{
			const { price, amount } = item
			total.total += price * amount
			total.amount += amount
			return total
		},{total: 0, amount: 0})

		// Round the amount to 2 decimal values
		total = parseFloat(total.toFixed(2))

		return {
			...state,
			amount: amount,
			total: total
		}
	}
	return state
}