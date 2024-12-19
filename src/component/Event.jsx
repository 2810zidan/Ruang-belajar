function Event() {
  return (
    <div className="pl-3 sm:pl-10 mt-32" id="Event">
      <h2 className="title">Event & Beasiswa</h2>
      <div className="relative w-full mt-10">
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin pl-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="event-card" key={index}>
              <img
                src="beasiswa.jpeg"
                alt="beasiswa"
                className="h-2/3 w-full"
              />
              <p className="w-full h-auto text-center text-sm sm:text-base p-2 sm:p-5">
                Gratis mengikuti Tes try Out Online, dan satu kelas secara
                gratis untuk pengguna baru
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
