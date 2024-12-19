function About() {
  return (
    <div id="About" className="px-2 sm:px-5 lg:px-10 mt-32">
      <h1 className="title">
        Mengenal Ruang Belajar
      </h1>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between  min-h-64">
        <div className="w-64 h-64 order-1 sm:order-2 sm:w-1/3 sm:h-full overflow-hidden">
          <img src="tech.png" alt="teacher" className="w-full h-full" />
        </div>
        <div className="text-xs lg:text-base text-center p-5 shadow-base rounded-lg order-2 sm:order-1 sm:w-1/2">
          <p>
            Ruang Belajar adalah aplikasi revolusioner yang membantu kamu
            menyiapkan ujian SNBT dan tes masuk universitas dengan cara yang
            lebih efektif dan terstruktur. Dengan soal-soal try out yang
            terpercaya, kami memberikan simulasi ujian yang sangat mirip dengan
            ujian sesungguhnya. Mari capai tujuan pendidikanmu bersama kami!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
