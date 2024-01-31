import React from "react";
import "../../Styles/Points.css";

const Points = () => {
  return (
    <>
      <div className="points-box">
        <p className="heading">Factors affecting sterilization by heat are:</p>
        <ul  className="text">
          <li>Nature of heat: Moist heat is more effective than dry heat</li>
          <li>
            Temperature and time: temperature and time are inversely
            proportional. As temperature increases the time taken decreases.
          </li>
          <li>
            Number of microorganisms: More the number of microorganisms, higher
            the temperature or longer the duration required.
          </li>
          <li>
            Nature of microorganism: Depends on species and strain of
            microorganism, sensitivity to heat may vary. Spores are highly
            resistant to heat.
          </li>
          <li>
            Type of material: Articles that are heavily contaminated require
            higher temperature or prolonged exposure. Certain heat sensitive
            articles must be sterilized at lower temperature.
          </li>
          <li>
            Presence of organic material: Organic materials such as protein,
            sugars, oils and fats increase the time required.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Points;
