import PostTitles from "./components/Blog/PostTitles";
import Home from "./pages/Home";
import GetPosts from "./hooks/wordpressApi";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <PostTitles/>
      {/* <GetPosts/> */}
    </div>
  );
}

export default App;
