const initState = {
  patients: [
    { id: "1", name: "Michael", domain: "patient" },
    { id: "2", name: "Dwight", domain: "patient" },
    { id: "3", name: "James", domain: "patient" }
  ]
};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      console.log("In here", state);
      console.log("In Users", action.data.user);
      return Object.assign({}, state, {
        patients: [...state.patients, action.data.user]
      });
    default:
      return state;
  }
  console.log(state);
};

export default patientReducer;
