import React, { useState, useEffect, useRef } from "react";

const TableauView = () => {
  const [chartType, setChartType] = useState("bar");
  const tableauVizRef = useRef(null);

  const tableauUrlBarChart =
    "https://public.tableau.com/views/react_17085865835020/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";

  const tableauUrlPieChart =
    "https://public.tableau.com/views/react-do/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";

  useEffect(() => {
    const initViz = () => {
      const url = chartType === "bar" ? tableauUrlBarChart : tableauUrlPieChart;

      if (window?.tableau && tableauVizRef?.current) {
        const options = {
          width: "100%",
          height: "800px",
          hideTabs: true,
          hideToolbar: true,
          onFirstInteractive: function () {
            console.log("Tableau Dashboard is interactive.");
          },
        };

        if (tableauVizRef?.current?.viz) {
          tableauVizRef?.current?.viz?.dispose();
        }

        tableauVizRef.current.viz = new window.tableau.Viz(
          tableauVizRef.current,
          url,
          options
        );
      }
    };

    initViz();

    return () => {
      if (tableauVizRef.current && tableauVizRef.current.viz) {
        tableauVizRef.current.viz.dispose();
      }
    };
  }, [chartType]);

  return (
    <div className="container mt-1">
      <h2 className="text-center mb-4 text-merkle-red-tint">
        Tableau Dashboard
      </h2>
      <div className="text-center mb-3">
        <button
          className={`btn ${chartType === "bar" ? "btn-primary" : "btn-secondary"} me-2`}
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </button>
        <button
          className={`btn ${chartType === "pie" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setChartType("pie")}
        >
          Pie Chart
        </button>
      </div>
      <div
        className="embed-responsive embed-responsive-16by9"
        ref={tableauVizRef}
      ></div>
    </div>
  );
};

export default TableauView;
