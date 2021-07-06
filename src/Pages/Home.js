import React, {useEffect} from "react";
import Rooms from "../components/Rooms/Rooms";
import Summary from "../components/Summary/Summary";
import WelcomeBanner from "../components/WelcomBanner/WelcomeBanner";


const Home = (props) => {
  
  useEffect(() => {
    document.title = 'Olgok Guest House, Your Own House in The Mountains'
  })

  return (
    <>
      <WelcomeBanner />
      <Summary />
      <Rooms />
    </>
  );
};

export default Home;
