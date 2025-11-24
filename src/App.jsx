import { getDatabase, ref, set, push, child, get } from "firebase/database";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { db } from "./firebase";

import { DataContext } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Fakultas from "./components/Fakultas";
import Jurusan from "./components/Jurusan";
import Kelas from "./components/Kelas";
import Mahasiswa from "./components/Mahasiswa";
import Tambah from "./components/Tambah";

import Plus from "./assets/icon svg/plus.svg";

function Main() {
  const [showTambah, setShowTambah] = useState(false);
  return (
    <main className={`sm:pt-17 pt-28 relative h-screen`}>
      <Routes>
        <Route path='Fakultas' element={<Fakultas />} />
        <Route path='Kelas' element={<Kelas />} />
        <Route path='Jurusan' element={<Jurusan />} />
        <Route path='Mahasiswa' element={<Mahasiswa />} />
      </Routes>
      <button onClick={() => setShowTambah(!showTambah)}>
        <img
          src={Plus}
          alt='tambah'
          className={`fixed right-0 bottom-0 w-4 h-4 box-content p-5.5 m-3 bg-blue-200 rounded-2xl cursor-pointer hover:opacity-80`}
        />
      </button>
      {showTambah && (
        <div
          className={`fixed flex items-center justify-center top-0 w-full h-full z-10`}
        >
          <div
            onClick={() => setShowTambah(!showTambah)}
            className={`absolute top-0 bg-black opacity-40 w-full h-full`}
          >
            d
          </div>
          <div className={`absolute`}>
            <Tambah />
          </div>
        </div>
      )}
    </main>
  );
}

export default function App() {
  const { dispatch } = useContext(DataContext);
  const [dataFirebase, setDataFirebase] = useState({});

  useEffect(() => {
    const fakultasRef = ref(db); // ambil root
    get(fakultasRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(data);
        // Object.keys untuk ambil nama fakultas
        setDataFirebase(data);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  useEffect(() => {
    if (Object.keys(dataFirebase).length > 0) {
      // dataFirebase = { fakultas_x: {...}, fakultas_y: {...} }

      // Ambil nama fakultas
      const daftarFakultas = Object.keys(dataFirebase);
      const daftarJurusan = daftarFakultas.flatMap((fak) =>
        Object.keys(dataFirebase[fak])
      );

      const daftarKelas = daftarFakultas.flatMap((fak) =>
        Object.keys(dataFirebase[fak]).flatMap((jur) =>
          Object.keys(dataFirebase[fak][jur])
        )
      );

      const daftarMahasiswa = Object.keys(dataFirebase);

      dispatch({ type: "SET_FAKULTAS", payload: daftarFakultas });
      dispatch({ type: "SET_JURUSAN", payload: daftarJurusan });
      dispatch({ type: "SET_KELAS", payload: daftarKelas });
      dispatch({ type: "SET_MAHASISWA", payload: daftarMahasiswa });

      // Jika kamu ingin jurusan, kelas, mahasiswa diolah juga,
      // bisa kamu proses lagi di sini.
    }
  }, [dataFirebase, dispatch]);

  // console.log(dataFirebase);

  return (
    <Router>
      <div className={`absolute z-0 left-0 w-full bg-white`}>
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}
