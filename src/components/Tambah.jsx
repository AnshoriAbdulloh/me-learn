import { useState } from "react";
import { getDatabase, ref, set, push, child, get } from "firebase/database";
import { db } from "../firebase";

const LabelInput = ({ label, name, type, formData, handleChange }) => {
  return (
    <div className={`rounded-xl w-full mb-3 bg-transparent`}>
      <div
        className={`rounded-xl bg-transparent h-12 w-full group border border-transparent`}
      >
        <input
          name={name}
          type={type}
          placeholder={label}
          value={formData[name]}
          onChange={handleChange}
          className={`p-4 font-samsung w-full h-full rounded-xl border border-transparent bg-amber-400 group-hover:bg-transparent group-hover:border-amber-400 outline-none focus:bg-transparent focus:border-amber-400 not-placeholder-shown:border-amber-400 not-placeholder-shown:bg-transparent placeholder:text-sm`}
          required
        />
      </div>
    </div>
  );
};

export default function Jurusan() {
  const [formData, setFormData] = useState({
    fakultas: ``,
    jurusan: ``,
    nim: ``,
    kelas: ``,
    nama: ``,
    email: ``,
    noHp: ``,
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah reload halaman

    const { fakultas, jurusan, nim, nama, kelas, email, noHp } = formData;

    if (!fakultas || !jurusan || !nim || !nama || !kelas || !email || !noHp) {
      alert("Semua field wajib diisi!");
      return;
    }

    // simpan data ke Firebase
    set(ref(db, `fakultas_${fakultas}/${jurusan}/${kelas}/${nim}`), {
      nama,
      email,
      noHp,
    })
      .then(() => {
        alert("Data berhasil ditambahkan!");
        // reset form
        setFormData({
          fakultas: ``,
          jurusan: ``,
          nim: ``,
          kelas: ``,
          nama: ``,
          email: ``,
          smt: ``,
          noHp: ``,
        });
      })
      .catch((error) => {
        alert("Gagal menambahkan data: " + error.message);
      });
  };

  // function writeUserData(fakultas, jurusan, nim, nama, email, smt, noHp) {
  //   set(ref(db, `fakultas_${fakultas}/${jurusan}/${nim}`), {
  //     nama,
  //     email,
  //     smt,
  //     noHp,
  //   });
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-gray-50 h-auto w-[90%] sm:w-[350px] md:w-[450px] mx-auto rounded-4xl flex flex-col items-center overflow-hidden md:p-8 sm:p-5 p-3 shadow-2xl z-30`}
    >
      <h1 className={`inline pb-4 -mt-4 font-samsung text-3xl`}>
        Tambah Mahasiswa
      </h1>
      <LabelInput
        label={`NIM`}
        name={`nim`}
        type={`number`}
        formData={formData}
        handleChange={handleChange}
      />
      <LabelInput
        label={`Nama`}
        name={`nama`}
        type={`text`}
        formData={formData}
        handleChange={handleChange}
      />
      <LabelInput
        label={`Kelas`}
        name={`kelas`}
        type={`text`}
        formData={formData}
        handleChange={handleChange}
      />
      <LabelInput
        label={`Jurusan`}
        name={`jurusan`}
        type={`text`}
        formData={formData}
        handleChange={handleChange}
      />
      <LabelInput
        label={`Fakultas`}
        name={`fakultas`}
        type={`text`}
        formData={formData}
        handleChange={handleChange}
      />
      {/* <LabelInput
        label={`Semester`}
        name={`smt`}
        type={`number`}
        formData={formData}
        handleChange={handleChange}
      /> */}
      <LabelInput
        label={`Email`}
        name={`email`}
        type={`email`}
        formData={formData}
        handleChange={handleChange}
      />
      <LabelInput
        label={`NoHp`}
        name={`noHp`}
        type={`number`}
        formData={formData}
        handleChange={handleChange}
      />
      <button
        type='submit'
        className={`font-samsung bg-amber-400 py-2 px-4 rounded-xl cursor-pointer self-end`}
      >
        TAMBAH
      </button>
    </form>
  );
}
