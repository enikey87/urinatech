import SolHeader from "./solnyshko/SolHeader";
import SolHero from "./solnyshko/SolHero";
import SolServices from "./solnyshko/SolServices";
import SolProfiles from "./solnyshko/SolProfiles";
import SolStation from "./solnyshko/SolStation";
import SolEnemas from "./solnyshko/SolEnemas";
import SolKalofores from "./solnyshko/SolKalofores";
import SolFactors from "./solnyshko/SolFactors";
import SolRooms from "./solnyshko/SolRooms";
import SolDining from "./solnyshko/SolDining";
import SolPromos from "./solnyshko/SolPromos";
import SolStaff from "./solnyshko/SolStaff";
import SolReviews from "./solnyshko/SolReviews";
import SolSteps from "./solnyshko/SolSteps";
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
        <SolProfiles />
        <SolStation />
        <SolEnemas />
        <SolKalofores />
        <SolFactors />
        <SolRooms />
        <SolDining />
        <SolPromos />
        <SolStaff />
        <SolReviews />
        <SolSteps />
        <SolBooking />
        <SolFaq />
      </main>
      <SolFooter />
    </>
  );
}
