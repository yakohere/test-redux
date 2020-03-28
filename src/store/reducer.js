const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "personAdd":
      console.log("tapped");
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: "Max",
          age: Math.floor(Math.random() * 40)
        })
      };
    case "personDelete":
      console.log("tapped");
      const updatedArray = state.persons.filter(
        person => person.id !== action.personId
      );
      return {
        ...state,
        persons: updatedArray
      };
  }

  return state;
};

export default reducer;
