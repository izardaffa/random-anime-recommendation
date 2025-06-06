import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

function Top() {
  return (
    <>
      <Navbar />

      <Main>
        {/* <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Generate Random Anime</Button> */}
        <Card />
      </Main>
      
      <Footer />
    </>
  );
}

export default Top;
