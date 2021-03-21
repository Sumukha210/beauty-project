import Slider from "../common/Slider";

const ArtistsToFollow = () => {
  const handleFollow = val => {
    console.log(val);
  };
  return (
    <div className="artistsToFollow py-4 mt-5">
      <Slider
        title="artist to follow"
        items={categoryOptions}
        subTitle="mangalore"
        handleFollow={handleFollow}
        hidePrev="hidePrev"
      />
    </div>
  );
};

export default ArtistsToFollow;

const categoryOptions = [
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(2).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(3).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(4).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(5).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
  {
    img: "/images/bg-(1).jpg",
    cardTitle: "Full Name",
    subTitle: ["artist,b. 1980", "20 posts,27 works for sale"],
  },
];
