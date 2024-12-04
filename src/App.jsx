import { useState } from "react";
import { usePrev } from "./use-prev/use-prev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click me
      </button>
      <p>The previous value was {prev}</p>
    </div>
  );
}

export default App;
