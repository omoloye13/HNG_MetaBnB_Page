import {Card, CardMultiply} from "../Components/Cards";
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
            </div>

        </main>
     );
}
 
export default AirBnb;