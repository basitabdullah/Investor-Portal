import { Link } from "react-router-dom";
import "../widget/widget.scss";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
const Widget = (props) => {
  const { icon, title, amount, clr, percent,color,path } = props;
  return (
    <Link style={{ background: clr }} className="widget" to={path}>
      <h5>{title}</h5>
      <h4>{amount}</h4>
      <button style={{color:color}}>Know more</button>
      {percent < 0 ? (
        <span className="red">
          <FaLongArrowAltDown />
          {percent}%
        </span>
      ) : (
        <span className="green">
          <FaLongArrowAltUp />+{percent}%
        </span>
      )}
      <img src={icon} alt="" />
    </Link>
  );
};

export default Widget;
