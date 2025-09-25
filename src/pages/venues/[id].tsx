import { useRouter } from "next/router";
import Layout from "../Layout";
import VenuesDetailsData from "@/components/venues/VenuesDetails";
import { DETAILS } from "@/constants/app.constants";

const VenueDetails = () => {
  const { id } = useRouter().query;

  const data = DETAILS.find((el) => el.id.toString() === id);
  console.log("data", data);

  if (!data) {
    return (
      <Layout>
        <p className="text-center mt-20 text-gray-500">Venue not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* <VenueData data={data} /> */}
      <VenuesDetailsData data={data} />
    </Layout>
  );
};

export default VenueDetails;
