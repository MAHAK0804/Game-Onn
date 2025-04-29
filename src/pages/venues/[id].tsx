import { useRouter } from "next/router";
import Layout from "../Layout";
import VenueData from "@/components/venues/VenueData";
import { details } from "@/constants/venuesDetails";

const VenueDetails = () => {
  const { id } = useRouter().query;

  const data = details.find((el) => el.id.toString() === id);
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
      <VenueData data={data} />
    </Layout>
  );
};

export default VenueDetails;
