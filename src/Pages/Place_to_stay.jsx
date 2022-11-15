import Footer from "../Components/Footer";
import Layers from "../Components/Layers";
import Nav from "../Components/Nav";
import { CardPlace,SingleCardBase, CardsPlace,PlaceCards} from "../Components/Cards";

const PlacetoStay = () => {
    return ( 
        <>
        <div className="places">
        <Nav />
        <Layers />
        <SingleCardBase />
        <CardPlace/>
        <CardsPlace />
        < PlaceCards />
        <Footer/>

        </div>
        </>
     );
}
 
export default PlacetoStay;