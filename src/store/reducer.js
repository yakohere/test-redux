const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "personAdd":
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: action.personData.name,
          age: action.personData.age
        })
      };
    case "personDelete":
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
