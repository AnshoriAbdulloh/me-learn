import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";

import Card from "./Card";

export default function Jurusan() {
  //   const [fakultas, setFakultas] = useState([]);
  //   useEffect(() => {
  //     const fakultasRef = ref(db); // ambil root
  //     get(fakultasRef).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         // console.log(data);
  //         // Object.keys untuk ambil nama fakultas
  //         setFakultas(Object.keys(data));
  //       } else {
  //         console.log("No data available");
  //       }
  //     });
  //   }, []);

  const { state } = useContext(DataContext);

  return (
    <div
      className={`card-fakultas px-3 grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3`}
    >
      {state.jurusan.map((nama, index) => (
        <Card key={index} value={nama.replace("fakultas_", "Fakultas ")}></Card>
      ))}
    </div>
  );
}
