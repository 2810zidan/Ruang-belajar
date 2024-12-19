import { FaFile } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { GiFlexibleStar } from 'react-icons/gi';

function Keunggulan() {
  return (
    <div className="px-5 sm:px-10 mt-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl">Keunggulan</h2>
      <div className="flex flex-wrap gap-5 justify-center lg:justify-between mt-5">
        <div className="keunggulan bg-light-300">
          <p>Soal Try Out Terpercaya dan Terbaru</p>
          <FaFile className="absolute top-2 right-2 sm:w-5 sm:h-5 lg:w-10 lg:h-10" />
        </div>
        <div className="keunggulan bg-light-400">
          <p>Pelaporan Kemajuan yang Mendalam</p>
          <IoStatsChart className="absolute top-2 right-2 sm:w-5 sm:h-5 lg:w-10 lg:h-10" />
        </div>
        <div className="keunggulan bg-light-200">
          <p>Fleksibilitas dalam Belajar Sesuai Waktu dan Kebutuhan</p>
          <GiFlexibleStar className="absolute -top-2 -right-2 sm:w-5 sm:h-5 lg:w-10 lg:h-10" />
        </div>
      </div>
    </div>
  );
}

export default Keunggulan;
