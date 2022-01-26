import { createContext, useState } from "react";

const ChartViewContext = createContext();

const initialChart = "container";

const ChartViewProvider = ({ children }) => {
  const [view, setView] = useState(initialChart);

  const handleChart = () => {
    // console.log(e.target.value);
    if (view === "container") {
      setView("container pro");
    } else {
      setView("container");
    }
  };

  const data = { view, handleChart };

  return <ChartViewContext.Provider value={data}>{children}</ChartViewContext.Provider>;
};

export { ChartViewProvider };
export default ChartViewContext;