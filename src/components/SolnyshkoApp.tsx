import SolHeader from "./solnyshko/SolHeader";
import SolHero from "./solnyshko/SolHero";
import SolServices from "./solnyshko/SolServices";
import SolEnemas from "./solnyshko/SolEnemas";
import SolKalofores from "./solnyshko/SolKalofores";
import SolStation from "./solnyshko/SolStation";
import SolRooms from "./solnyshko/SolRooms";
import SolStaff from "./solnyshko/SolStaff";
import SolReviews from "./solnyshko/SolReviews";
import SolBooking from "./solnyshko/SolBooking";
import SolFaq from "./solnyshko/SolFaq";
import SolFooter from "./solnyshko/SolFooter";

export default function SolnyshkoApp() {
  return (
    <>
      <SolHeader />
      <main>
        <SolHero />
        <SolServices />
        <SolStation />
        <SolEnemas />
        <SolKalofores />
        <SolRooms />
        <SolStaff />
        <SolReviews />
        <SolBooking />
        <SolFaq />
      </main>
      <SolFooter />
    </>
  );
}
