const initialState = {
    items:[
      {
        id:9,
        quantity:3,
      },
      {
        id:10,
        quantity:2,
      }
    ]
  };

  const cartReducer = (state = initialState, action)=>{
      switch(action.type){
        // case
        default:
          return state;
      }
  }

  export default cartReducer