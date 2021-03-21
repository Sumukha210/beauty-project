import Slider from "../common/Slider";
import { BiRupee } from "react-icons/bi";

const HandiCraft = () => {
  return (
    <div className="my-4">
      <Slider
        hidePrev="hidePrev"
        items={paintingsOptions}
        title="Handicrafts"
        subTitle="category"
        arrowPosition="arrowPosition"
        viewAllPath="/paintings"
      />
    </div>
  );
};

export default HandiCraft;

const paintingsOptions = [
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/bg-(2).jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/bg-(3).jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/bg-(4).jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/bg-(5).jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
  {
    img: "/images/hero-bg.jpg",
    cardTitle: "paintings",
    subTitle: [
      "artist name",
      <>
        <BiRupee />{" "}
        <span style={{ position: "absolute", left: "13px" }}>50,500</span>
      </>,
    ],
  },
];
