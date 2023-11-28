import { useEffect, useRef } from "react";
import "./styles/app.css";
import "./styles/output.css";

function App() {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    ref.current.style.opacity = "1";
  }, []);
  return (
    <div ref={ref} className="h-100vh w-100vw">
      <img
        style={{ padding: "93px 0 29px 0", margin: "0 auto" }}
        className="mt-93px mb-29px"
        width={86}
        height={70}
        alt="欢乐购"
        src={"./images/img/logo_@2x.png"}
      ></img>
      <p style={{ textAlign: "center" }}>欢乐购</p>
      <img
        style={{ padding: "150px 0 100px 0", margin: "0 auto" }}
        width={202}
        height={118}
        alt="吃的开心"
        src={"./images/img/slogn_word_icon_@2x.png"}
      ></img>
      <img
        style={{ margin: "0 auto" }}
        alt="next"
        src={"./images/img/next_step_icon_@2x.png"}
      ></img>
    </div>
  );
}

export default App;
