import About from '../component/About';
import Cover from '../component/Cover';
import Event from '../component/Event';
import Fitur from '../component/Fitur';
import Footer from '../component/Footer';
import Instruktur from '../component/Instruktur';
import Keunggulan from '../component/Keunggulan';
import Navbar from '../component/Navbar';
import Testimoni from '../component/Testimoni';

function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Keunggulan />
      <Fitur />
      <Event />
      <Testimoni />
      <Instruktur />
      <Footer />
    </>
  );
}

export default Home;
