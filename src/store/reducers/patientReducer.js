const initState = {
  patients: [
    {
      id: "1",
      name: "Dwight Schrute",
      domain: "patient",
      email: "Dwight@office.com",
      age: 20,
      gender: "male",
      date_of_birth: "March 31, 2020",
      date_of_last_visit: "March 31, 2020"
    },
    {
      id: "2",
      name: "James Halpert",
      domain: "patient",
      email: "James@office.com",
      age: 20,
      gender: "male",
      date_of_birth: "May 28, 2020",
      date_of_last_visit: "March 31, 2020"
    }
  ]
};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      console.log("Current State", state);
      console.log("In Users", action);
      return Object.assign({}, state, {
        patients: [...state.patients, action.data.user]
      });
    case "DELETE_PATIENT":
      console.log("DELETE", action);
      let newState = state.patients.filter(patient => {
        return patient.email !== action.data;
      });
      console.log(newState);
      return {
        ...state,
        patients: newState
      };
    default:
      return state;
  }
};

export default patientReducer;
