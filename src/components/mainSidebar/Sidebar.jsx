import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import "../../styles/sidebar.scss";
const sidebarData = [
  {
    title: "Overview",
    id: 1,
    option: "overview",
    path: "/",
  },
  {
    title: "Pitch Deck",
    id: 2,
    option: "pitch",
    path: "/pitch-deck",
  },
  {
    title: "Financial Projections",
    id: 3,
    option: "financial",
    path: "/financial-projections",
  },
  {
    title: " Invest in BIDCHEMZ",
    id: 4,
    option: "investing",
    path: "/offer-investment",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(
    "/financial-projections"
  );

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedOption("overview");
    } else if (location.pathname === "/financial-projections") {
      setSelectedOption("financial");
    } else if (location.pathname === "/offer-investment") {
      setSelectedOption("investing");
    } else if (location.pathname === "/pitch-deck") {
      setSelectedOption("pitch");
    }
  }, [location.pathname]);
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 785) {
        setOpen(false);
      } else return;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        borderRadius: open ? "" : "0px 30px  30px 0",
        marginTop: open ? "" : "10px",
        width: open ? "365px" : "50px",
        height: open ? "100%" : "40px",
      }}
      className="sidebarContainer"
    >
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={toggle}
        style={{
          left: open ? "" : "18px",
        }}
      />
      <ul className="list-none mt-10 flex-col mb-10 ">
        {sidebarData.map((i) => (
          <Link key={i.id} to={open ? i.path : ""}>
            <li
              style={{
                padding: open ? "" : "10px",
              }}
              className={
                selectedOption === i.option && open
                  ? "bg-white rounded-lg text-[#319795] "
                  : ""
              }
            >
              {!open ? "" : i.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="anchors">
        <a
          href={"mailto:youremail@example.com"}
          className="anchor"
          style={{ display: open ? "" : "none" }}
        >
          <MdOutlineEmail />
          Email Us for more information
        </a>
        <a
          href="https://www.bidchemz.com/"
          className="anchor"
          style={{ display: open ? "" : "none" }}
        >
          <MdArrowOutward />
          Visit the site BIDCHEMZ.com
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
