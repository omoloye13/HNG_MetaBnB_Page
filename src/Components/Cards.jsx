import DB from "../DB.json";

export const CardBase = (props) => {
  const { title1, title2, text1, text2, imgs } = props;

  return (
    <>
      {/* <div className="card text-center card-bg">
        <div className="card-body">
          <h4 className="card-title">{title1}</h4>
          <p className="card-text">{text1}</p>
        </div>
      </div> */}
      <div class="card">
        <img className="card-img-top" src={imgs} alt="Card image cap" />
        <div className="card-body one">
          <p className="card-text">{title1}</p>
          <p className="card-text">{title2}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{text1}</p>
          <p className="card-text">{text2}</p>
        </div>
      </div>
    </>
  );
};
export const CardMultiply = () => {
  return (
    <div className="row m-0">
      {DB.homecards.map((homecard) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12">
            <CardBase {...homecard}></CardBase>
          </div>
        );
      })}
    </div>
  );
};
// export default CardBase;
