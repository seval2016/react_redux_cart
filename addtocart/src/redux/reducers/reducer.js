const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }


        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if (state.carts[IteamIndex_dec].qnty > 1) {
                const updatedCarts = state.carts.map((item, index) =>
                    index === IteamIndex_dec ? { ...item, qnty: item.qnty - 1 } : item
                );
            
                return {
                    ...state,
                    carts: updatedCarts
                };
            } else {
                const data = state.carts.filter((el) => el.id !== action.payload.id);
                return {
                    ...state,
                    carts: data
                };
            }
            

        default:
            return state
    }
}