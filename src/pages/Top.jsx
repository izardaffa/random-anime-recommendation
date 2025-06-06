import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import axios from "axios";

function Top() {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const getAnime = async () => {
    try {
      const allowedTypes = ['tv', 'movie', 'ova', 'ona', 'special'];
      let anime;
      do {
        const response = await axios.get(`https://api.jikan.moe/v4/random/anime`);
        anime = response.data.data;
      } while (!allowedTypes.includes(anime.type.toLowerCase()));
      return anime;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };

  const handleGetAnime = async () => {
    setLoading(true);
    const result = await getAnime();
    setAnime(result);
    setGenerated(true);
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Main>
        {!loading && !generated && <Button className="md:btn-lg" onClick={handleGetAnime}>Generate Random Anime</Button>}
        {loading && <Loader />}
        {!loading && generated && <Card 
          anime={anime}
          onClick={handleGetAnime}
        />}
      </Main>
      
      <Footer />
    </>
  );
}

export default Top;
