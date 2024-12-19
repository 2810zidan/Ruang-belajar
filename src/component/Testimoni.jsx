import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const data = [
  {
    img: 'testi-1.jpg',
    text: 'Saya tidak menyangka dapat lulus dengan mudah masuk PTN impian',
  },
  {
    img: 'testi2.jpg',
    text: 'Materi yang diberikan sangat relavant pada saat UTBK',
  },
  {
    img: 'testi-3.png',
    text: 'Saya sangat senang saat insutruktu mejelaskan dengan baik dan sabar',
  },
];

function Testimoni() {
  const [item, setItem] = useState(0);
  console.log(data.length);

  return (
    <div className="pl-5 sm:pl-10 mt-32" id='Testimoni'>
      <h1 className="title">Tesimoni</h1>
      <div className="flex justify-center items-center mt-10">
        <div className="">
          <MdKeyboardArrowLeft
            className="w-10 h-10 hover:text-dark-100"
            onClick={() => setItem((item) => (item === 0 ? item : item - 1))}
          />
        </div>
        <div className="flex flex-col items-center w-[20rem] h-[20rem] lg:w-96 lg:h-96">
          <div className="overflow-hidden object-cover flex justify-center items-center">
            <img
              src={data[item].img}
              alt={data[item].img}
              className="h-full w-full"
            />
          </div>
          <p className="text-xs lg:text-base text-center mx-10 sm:mx-0 p-5 shadow-base rounded-lg order-2 sm:order-1">
            {data[item].text}
          </p>
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

export default Testimoni;
