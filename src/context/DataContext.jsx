import { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  fakultas: [],
  jurusan: [],
  kelas: [],
  mahasiswa: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FAKULTAS":
      return { ...state, fakultas: action.payload };

    case "SET_JURUSAN":
      return { ...state, jurusan: action.payload };

    case "SET_KELAS":
      return { ...state, kelas: action.payload };

    case "SET_MHS":
      return { ...state, mahasiswa: action.payload };

    default:
      return state;
  }
}

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

// // supaya mudah dipanggil
// export const useData = () => useContext(DataContext);
