const initState = {
  patients: [
    {
      id: "1",
      name: "Dwight Schrute",
      domain: "patient",
      email: "Dwight@office.com",
      age: 20,
      gender: "male",
      date_of_birth: "2020/03/20",
      date_of_last_visit: "2020/03/20",
      symptoms: [{ value: "cough" }, { value: "headache" }],
      medicines: "Crocin"
    },
    {
      id: "2",
      name: "James Halpert",
      domain: "patient",
      email: "James@office.com",
      age: 20,
      gender: "male",
      date_of_birth: "2020/03/20",
      date_of_last_visit: "2020/03/20",
      symptoms: [{ value: "headache" }, { value: "cough" }],
      medicines: "Vicks"
    }
  ]
};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      console.log(action, state);
      return Object.assign({}, state, {
        patients: [...state.patients, action.data]
      });
    case "EDIT_PATIENT":
      let newPatients = state.patients.map(patients =>
        action.data.email === patients.email ? action.data : patients
      );
      return {
        ...state,
        patients: newPatients
      };
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
