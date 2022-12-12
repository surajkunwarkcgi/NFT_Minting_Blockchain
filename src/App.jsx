import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Alert from "./components/Alert";
import Loading from "./components/Loading";
import { useEffect } from "react";
import { isWalletConnected, loadNfts } from "./Adulam";
import { useGlobalState } from "./store";

const App = () => {
  const [nfts] = useGlobalState("nfts");

  useEffect(async () => {
    await isWalletConnected().then(() => console.log("Blockchain Loaded"));
    await loadNfts();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
};

export default App;
