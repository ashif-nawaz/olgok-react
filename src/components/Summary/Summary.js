import React from "react";
import Styles from "./Summary.module.css";

const Summary = (props) => {
  return (
    <section className={Styles.Summary}>
      <h1>Your Home, Far in the Mountains.</h1>
      <p>
        <span style={{ color: "var(--primary-color)", fontWeight: 800 }}>Olgok Guest House </span>
        is located in the heart of the historic center of Florence in an
        extremely characteristic, quite and lively area within short walk
        distance to all sites and is surrounded by the extraordinary beauty of
        high mountains and trees.
      </p>
      <p className={Styles.Third}>
      The entire House recalls the ancient ‘Palazzi’
        of times past where young European aristocrats lived while discovering
        the beauty and the artistic mysteries of Italy.Cellai Hotel is part of a lovingly restored 1800 palace. On entering
        this charming hotel in Florence, you will immediately sense its special
        intimate atmosphere that makes you feel like being in your own
        florentine home. Each detail has been passionately chosen and each room
        deserves a visit. Hotel Cellai style mixes valuable antiques and
        original artworks with an unexpected eclectic contemporary twist.
      </p>
      <p style={{ color: "var(--primary-color)", fontWeight: 600 }}>
        "The special charm and the cosy mood of Olgok will make you feel as a
        true fiorentine in Florence."
      </p>
    </section>
  );
};

export default React.memo(Summary);
