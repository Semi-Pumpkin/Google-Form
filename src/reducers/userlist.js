export const SIGN_IN = "SIGN_IN"

export const signin = (id, pw) => ({
    type: SIGN_IN,
    payload: {id: id, pw: pw},
})

const initialState = {
    userlist: [{id: "admin", pw: "admin"}]
  }

  const userlist = (state = initialState, action) => {
    switch (action.type) {
  
      case SIGN_IN: {
          return {
              ...state,
              userlist: state.userlist.concat({
              id: action.payload.id,
              pw: action.payload.pw
              }),
          }
      }
  
      default:
        return state;
    }
  };
  
  export default userlist