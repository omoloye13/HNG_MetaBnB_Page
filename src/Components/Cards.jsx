import DB from "../DB.json";
export const CardBase = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss">
        <div class="card m-0 p-0">
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardMultiply = () => {
  return (
    <div className="row m-0 mapper mt-5">
      <h1 className="header_two">Inspiration for your next adventure</h1>
      {DB.homecards.map((homecard) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
            <CardBase {...homecard}></CardBase>
          </div>
        );
      })}
    </div>
  );
};
export const CardComponent = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss">
        <div class="card m-0 p-0" >
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const Card = () => {
  return (
    <div className="row m-0 mapper mt-5">
      {DB.homecardss.map((homecards) => {
        return (
          <div className="col-md-4 col-lg-3 col-sm-12 mt-3" key={homecards.id}>
            <CardComponent {...homecards}></CardComponent>
          </div>
        );
      })}
    </div>
  );
};
