import Slider from "../common/Slider";

const FeatureCategories = () => {
  return (
    <>
      <Slider title="feature categories" items={categoryOptions} textCenter />
    </>
  );
};

export default FeatureCategories;

const categoryOptions = [
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(2).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(3).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(4).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(5).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
  { img: "/images/bg-(1).jpg", cardTitle: "paintings" },
];
