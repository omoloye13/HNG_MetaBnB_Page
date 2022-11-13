import {CardMultiply} from "../Components/Cards";
import Heros from "../Components/Heros";
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
            </div>

        </main>
     );
}
 
export default AirBnb;