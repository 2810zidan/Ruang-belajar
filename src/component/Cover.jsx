import { IoSearchSharp } from 'react-icons/io5';

function Cover() {
  return (
    <div
      id="Home"
      className="relative flex flex-col lg:flex-row px-5 h-auto mt-12 items-center"
    >
      <div className="w-full lg:w-1/2 space-y-5 lg:pl-5 flex flex-col items-center">
        <h1 className="text-xl sm:text-6xl pt-5 text-white text-center sm:w-2/3 lg:w-full lg:text-dark-200">
          Tempat Belajar Online Terbaik
        </h1>
        <p className="text-white text-sm sm:text-base text-center sm:w-2/3 lg:w-full lg:text-dark-200">
          Platform dimana anda bisa mengembangkan diri anda lebih baik, serta
          membantu dalam ujian masuk ke perguran tinggi negeri
        </p>
        <div className="flex gap-5 justify-center">
          <input
            type="text"
            placeholder="Cari Kelas ..."
            className="border border-white lg:border-black focus:outline-none rounded-lg px-5 w-1/2 bg-transparent sm:w-full lg:w-2/3 shadow-base h-10 sm:h-auto placeholder:text-white lg:placeholder:text-dark-200"
          />
          <button className="p-2 sm:p-5 bg-light-500 rounded-lg shadow-base">
            <IoSearchSharp className="text-white w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-5 font-semibold translate-y-10 lg:translate-y-0">
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-md shadow-base bg-light-200 justify-center flex-col flex items-center">
            <p className="text-base sm:text-xl">300 +</p>
            <p className="text-xs sm:text-base absolute bottom-2">Siswa</p>
          </div>
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-md shadow-base bg-light-300 justify-center flex-col flex items-center">
            <p className="text-base sm:text-xl">50 +</p>
            <p className="text-xs sm:text-base absolute bottom-2">Instruktur</p>
          </div>
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-md shadow-base bg-light-400 justify-center flex-col flex items-center">
            <p className="text-base sm:text-xl">120 +</p>
            <p className="text-xs sm:text-base absolute bottom-2">Kelas</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 px-5 -z-10 lg:w-1/2 lg:relative">
        <img
          src="cover.jpg"
          alt="cover"
          className="rounded-2xl lg:rounded-[70px] h-full w-full"
        />
      </div>
    </div>
  );
}

export default Cover;
