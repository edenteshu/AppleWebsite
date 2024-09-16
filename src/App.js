import "./css/styles.css";
import "./css/bootstrap.css";
import Main from "./components/Main";
import Mac from "./components/Mac";
import Iphone from "./components/Iphone";
import Ipad from "./components/Ipad";
import Watch from "./components/Watch";
import Tv from "./components/Tv";
import Music from "./components/Music";
import Support from "./components/Support";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Fouro4 from "./components/Fouro4";
import { Routes, Route } from "react-router-dom";
import SharedLayOut from "./components/SharedLayOut";
import ProductPage from "./components/ProductPage";

// import Youtube from "./components/Youtube";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Main />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID " element={<ProductPage />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Fouro4 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
