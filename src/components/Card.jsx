export default function Card({ value }) {
  return (
    <div className={`card w-full h-52 bg-yellow-400 rounded-2xl p-8 `}>
      <h1 className={`font-samsung text-2xl`}>{value}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  );
}
