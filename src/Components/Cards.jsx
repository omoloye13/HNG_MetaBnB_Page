import DB from "../DB.json";
export const CardBase = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss" >
        <div className="card m-0 p-0">
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2 mb-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardMultiply = () => {
  return (
    <div className="row m-0 mapper mt-5" id="heroes">
      <h1 className="header_two">Inspiration for your next adventure</h1>
      {DB.homecards.map((homecard) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3"key={homecard.id}>
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
        <div className="card m-0 p-0" >
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2 mb-2">
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
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3" key={homecards.id}>
            <CardComponent {...homecards}></CardComponent>
          </div>
        );
      })}
    </div>
  );
};
// Places page

export const SingleCardComponent = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss">
        <div className="card m-0 p-0" >
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2 mb-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const SingleCardBase = () => {
  return (
    <div className="row m-0 mapper mt-5">
      {DB.cards.map((card) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3" key={card.id}>
            <SingleCardComponent {...card}></SingleCardComponent>
          </div>
        );
      })}
    </div>
  );
};
////////
export const CardPBase = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss">
        <div className="card m-0 p-0">
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2 mb-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardPlace = () => {
  return (
    <div className="row m-0 mapper mt-5">
      {DB.homecards.map((homecard) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3"key={homecard.id}>
            <CardPBase {...homecard}></CardPBase>
          </div>
        );
      })}
    </div>
  );
};
//////////

export const CardsBase = (props) => {
  const { title1, title2, text1, text2, imgs, star } = props;
  return (
    <>
      <div className="bliss">
        <div className="card m-0 p-0">
          <img className="card-img-top" src={imgs} alt="Card image cap" />
          <div className="card-body one m-0 p-2">
            <p className="card-text pro_one">{title1}</p>
            <p className="card-text pro_two">{title2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-1">
            <p className="card-text pro_one">{text1}</p>
            <p className="card-text pro_one">{text2}</p>
          </div>
          <div className="card-body m-0 p-0 mx-2 mb-2">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardsPlace = () => {
  return (
    <div className="row m-0 mapper mt-5">
      {DB.cardss.map((cards) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3"key={cards.id}>
            <CardsBase {...cards}></CardsBase>
          </div>
        );
      })}
    </div>
  );
};

/////
export const PlaceCards = () => {
  return (
    <div className="row m-0 mapper mt-5 mb-5">
      {DB.placecards.map((placecard) => {
        return (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3"key={placecard.id}>
            <CardsBase {...placecard}></CardsBase>
          </div>
        );
      })}
    </div>
  );
};