
export const insertCart = (item) =>{
    return {
        type: 'INSERT_CART',
        payload: item
    
    }
}
export const removeCart = (id) => {
    return {
        type: 'REMOVE_CART'
        ,payload: id
    }
}

