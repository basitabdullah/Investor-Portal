import "./quarterChart.scss"

const QuarterChart = (vals) => {
  return (
    <div className="quarterChart">
      <div className="circle one">
        <div className="text">
          <span className="qnumber">Q4</span>
          <span className="amt">{vals.amt4}</span>
        </div>
      </div>
      <div className="circle two">
        <div className="text">
          <span className="qnumber">Q2</span>
          <span className="amt">{vals.amt2}</span>
        </div>
      </div>
      <div className="circle four">
        <div className="text">
          <span className="qnumber">Q1</span>
          <span className="amt">{vals.amt1}</span>
        </div>
      </div>
      <div className="circle three">
        <div className="text">
          <span className="qnumber">Q3</span>
          <span className="amt">{vals.amt3}</span>
        </div>
      </div>
    </div>
  );
}

export default QuarterChart
