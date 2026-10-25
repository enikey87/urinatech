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
import SolKids from "./solnyshko/SolKids";
import SolNews from "./solnyshko/SolNews";
import SolPromos from "./solnyshko/SolPromos";
import SolLoyalty from "./solnyshko/SolLoyalty";
import SolStaff from "./solnyshko/SolStaff";
import SolReviews from "./solnyshko/SolReviews";
import SolSteps from "./solnyshko/SolSteps";
import SolBooking from "./solnyshko/SolBooking";
import SolDocuments from "./solnyshko/SolDocuments";
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
        <SolKids />
        <SolNews />
        <SolPromos />
        <SolLoyalty />
        <SolStaff />
        <SolReviews />
        <SolSteps />
        <SolBooking />
        <SolDocuments />
        <SolFaq />
      </main>
      <SolFooter />
    </>
  );
}
