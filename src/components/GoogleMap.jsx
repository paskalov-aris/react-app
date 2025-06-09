import { APIProvider, Map } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyACq-jHEHMSRIL8eK1SHpUu_Sdww17yV0o";

export const GoogleMap = () => {
  return (
    <APIProvider apiKey={API_KEY} region="UA" language="ua">
      <Map
        style={{ width: "50vw", height: "50vh" }}
        defaultCenter={{ lat: 49.421529404344646, lng: 32.09857159019578 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};
