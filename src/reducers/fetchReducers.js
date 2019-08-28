export const fetchReducer = (state, action) => {
  switch(action.type){
    case 'GET_REQUEST' :  return getRequest();
    case 'POST_REQUEST' : return postRequest();
    case default : 
  
  }
}

const getRequest = () => async dispatch => {
  try {
    const res = await fetch(`/api/sample/getSampleSentence`);
    //console.log(res);
    dispatch({ type: "GET_REQUEST", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};