import Lock from "../Images/lock.png";
const Layers = () => {
  return (
    <>
      <div className="layers">
        <div className="lay">restaurant</div>
        <div className="lay">cottage</div>
        <div className="lay">castle</div>
        <div className="lay">fantast city</div>
        <div className="lay">beach</div>
        <div className="lay">carbins</div>
        <div className="lay">off-grid</div>
        <div className="lay">farm</div>
        <div className="wrap">
          <div className="loc_1">location </div>
          <img src={Lock} alt="lock" />
        </div>
      </div>
    </>
  );
};

export default Layers;
