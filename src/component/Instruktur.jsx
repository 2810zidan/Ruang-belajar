import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const data = [
  {
    img: 'zidan.png',
  },
  {
    img: 'bams.png',
  },
  {
    img: 'miko.png',
  },
  {
    img: 'bagas.png',
  },
  {
    img: 'asya.png',
  },
  {
    img: 'uci.png',
  },
  {
    img: 'attor.png',
  },
];

function Instruktur() {
  const [item, setItem] = useState(0);
  console.log(data.length);

  return (
    <div className="pl-5 sm:pl-10 mt-32" id='Instruktur'>
      <h1 className="title">Instruktur</h1>
      <div className="flex justify-center items-center mt-10">
        <div className="">
          <MdKeyboardArrowLeft
            className="w-10 h-10 hover:text-dark-100"
            onClick={() => setItem((item) => (item === 0 ? item : item - 1))}
          />
        </div>
        <div className="flex flex-col items-center w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[35rem]">
          <div className="overflow-hidden object-cover flex justify-center items-center border-4 border-black shadow-base">
            <img
              src={data[item].img}
              alt={data[item].img}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="">
          <MdKeyboardArrowRight
            className="w-10 h-10 hover:text-dark-100"
            onClick={() =>
              setItem((item) => (item >= data.length - 1 ? item : item + 1))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Instruktur;
