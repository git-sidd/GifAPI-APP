import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className=" h-screen md:h-full flex flex-col background">
      <h1 className="bg-white text-center h-8 flex justify-center items-center text-2xl font-bold py-2 mt-6 rounded-md mx-[25px]">
      Random Gif
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}
