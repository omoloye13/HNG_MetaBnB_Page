import {Card, CardMultiply} from "../Components/Cards";
import Footer from "../Components/Footer";
import Heros from "../Components/Heros";
import Meta from "../Components/Meta";
import Mid from "../Components/Mid";
import NavBar from "../Components/Navbar";

const AirBnb = () => {
    return ( 
        <main className="air">
            <div>
                <NavBar />
                <Heros />
                <Mid/>
                <CardMultiply/>
                <Card />
                <Meta />
                <Footer />
            </div>

        </main>
     );
}
 
export default AirBnb;