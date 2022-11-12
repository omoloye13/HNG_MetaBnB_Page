import card_1 from "../Images/hero_card_1.png"
import card_2 from "../Images/hero_card_2.png"




const Heros = () => {
  return (
    <>
      <div className="heros">
        <div className="first">
          <h1 className="header">
            Rent a <span className="head">Place</span> away from{" "} 
            <span className="head"> Home</span> in the{" "}
            <span className="head">Metaverse</span>
          </h1>
          <p className="para mt-4">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="d-flex flex-md-row flex-sm-column mt-4">
            <input
              type="text"
              placeholder="Search for location"
              className="form"
            />
            <button className="btn">Search</button>
          </div>
        </div>
        <div className="second">
            <img src={card_1} alt="" className="hero_card_one" />
            <img src={card_2} alt="" />
            

        </div>
      </div>
    </>
  );
};

export default Heros;
