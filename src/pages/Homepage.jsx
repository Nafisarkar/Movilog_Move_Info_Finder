import Imagegrid from "../components/Imagegrid";

const Homepage = () => {
  return (
    <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="pt-5">
        {" "}
        {/* Add padding-top to account for the navbar height */}
        <p className="text-2xl text-white font-bold text-center">Now Playing</p>
        <Imagegrid />
      </div>
    </div>
  );
};

export default Homepage;
