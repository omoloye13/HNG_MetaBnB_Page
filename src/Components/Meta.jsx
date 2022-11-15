import nft_card from "../Images/nft_card.png";
const Meta = () => {
  return (
    <>
      <main>
        <div className="bubble" id="nft">
          <div className="pills">
            <div className="flow-1">
              <h1 className="header_three">Metabnb NFTs</h1>
              <p>
                {" "}
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.{" "}
              </p>

              <button>Learn more</button>
            </div>
            <div className="flow-2">
              <img src={nft_card} alt="nft_card" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Meta;
