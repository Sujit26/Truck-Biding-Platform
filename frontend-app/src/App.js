import "./App.css";
import PrimarySearchAppBar from "./components/appbar";
import UnionGrid from "./components/unions";
import TruckUnionCard from "./components/union_card";
import UnionBooking from "./components/BookingComponent/union_booking";
function App() {
  const unions = [
    {
      name: "Jaiwaliys's Union",
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business-standard.com%2Farticle%2Fcurrent-affairs%2Fover-90-000-trucks-stop-plying-in-punjab-over-govt-move-to-disband-unions-117070900408_1.html&psig=AOvVaw21NNoyusMv6tkLZdPjUhBM&ust=1620849809879000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDS4J22wvACFQAAAAAdAAAAABAD",
      description:
        "Tractor-trailer truck drivers surprising outnumber delivery truck drivers by a two-to-one ratio, according to the U.S. Bureau of Labor Statistics, but both types of drivers can work for unions. Tractor-trailer drivers haul products overnight to various locations throughout the United States. Delivery drivers work in local territories, delivering packages to businesses and residences. Union truck drivers -- both delivery and tractor-trailer drivers -- earn average incomes between $40,000 and $50,000 annually.",
      contact: "+91-7037251245",
      address:
        " 365 Pushpanjli Vihar, Janta Road, Saharanpur - 247001, Behind Dr Ashok ",
    },
    {
      name: "Jain's Packers",
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.truckinginfo.com%2F288137%2Fhow-fleets-should-deal-with-labor-unions&psig=AOvVaw21NNoyusMv6tkLZdPjUhBM&ust=1620849809879000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDS4J22wvACFQAAAAAdAAAAABAP",
      description:
        "A union truck drivers salary may vary within certain industries. Although the U.S. Bureau of Labor Statistics doesnt report salaries specifically for union truck drivers, it does for delivery and tractor-trailer truck drivers. Delivery truck drivers earned their highest salaries of $55,290 in the movie industry, according to the BLS, while tractor-trailer drivers earned relatively high salaries of $58,140 in the courier and express delivery industry. Both delivery and tractor-trailer union truck drivers may also earn more in the movie and courier industries, respectively. Union truck drivers earn more in New York and Washington, D.C. because living costs are higher there. For example, a union truck driver earning $45,000 in Houston would need to make $109,643 in New York City to maintain his living standard. In Washington, D.C., that same driver would need to earn $71,809 annually.",
      contact: "+91-5124570372",
      address:
        " 420 pant Vihar, Janta Road, Indore - 247001, Behind police station ",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <PrimarySearchAppBar />
        {/* <UnionBooking  union = {unions[0]} /> */}
        {/* <PrimarySearchAppBar />

        TODO
          make a grid system for truckunion card
          make card clickable, onclick => open a new tab with UnionBooking compoment

       
        {
        unions.map((union, key) => {
         return <TruckUnionCard key={key} {...union}/>;
        })} */}
        {/* <UnionGrid/> */}
      </header>
    </div>
  );
}

export default App;
