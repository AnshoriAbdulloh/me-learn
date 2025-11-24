import Card from "./Card";

export default function Kelas() {
  return (
    <div
      className={`card-kelas px-3 grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3`}
    >
      <Card value={`parjo`} />
      <Card value={`parjo`} />
    </div>
  );
}
