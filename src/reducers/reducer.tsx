interface State {
  // Define the shape of your state here
}

interface Action {
  type: string;
  // Define any additional properties for your actions here
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
  }
  return state;
};
