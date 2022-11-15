import facebook from "../Images/fb_logo.png";
import instagram from "../Images/insta_logo.png";
import twitter from "../Images/twi_logo.png";
import copywright from "../Images/copywright.png";
import footer_Logo from "../Images/footer_logo.png";
const Footer = () => {
  return (
    <>
    <div className="bg-footer">
      <div className="footer">
        <div className="last_1">
          <img src={footer_Logo} alt="meta_logo" />
          <div className="icon">
            <img src={facebook} alt="facebook_logo" />
            <img src={instagram} alt="instagram_logo" />
            <img src={twitter} alt="twitter_logo" />
          </div>
          <div className="copy">
            <img src={copywright} alt="copywright" />
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div className="last_2">
            <h2 className="header_footer">Community</h2>
            <p>NFTs</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
        </div>
        <div className="last_2">
        <h2 className="header_footer">Places</h2>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
        </div>
        <div className="last_2">
        <h2 className="header_footer">About us</h2>
            <p>Roadmap</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>

        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
