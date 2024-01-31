import React from "react";
import "../../Styles/Section1.css";
import image from "../../Assets/Types-of-Sterilization.png"

const Section1 = () => {
  return (
    <>
      <div className="section-1">
          <b className="heading">Sterilization and Disinfection</b>
          <div style={{marginTop:'5px'}}></div>
          <p className="text">
          <b>Sterilization</b> is defined as the process where all the living
          microorganisms, including bacterial spores are killed. Sterilization
          can be achieved by physical, chemical and physiochemical means.
          Chemicals used as sterilizing agents are called chemisterilants.{" "}
          <br />
          <b>Disinfection</b> is the process of elimination of most pathogenic
          microorganisms (excluding bacterial spores) on inanimate objects.
          Disinfection can be achieved by physical or chemical methods.
          Chemicals used in disinfection are called disinfectants. Different
          disinfectants have different target ranges, not all disinfectants can
          kill all microorganisms. Some methods of disinfection such as
          filtration do not kill bacteria, they separate them out. Sterilization
          is an absolute condition while disinfection is not. The two are not
          synonymous. <br /> 
          <b>Decontamination</b> is the process of removal of contaminating
          pathogenic microorganisms from the articles by a process of
          sterilization or disinfection. It is the use of physical or chemical
          means to remove, inactivate, or destroy living organisms on a surface
          so that the organisms are no longer infectious. <br /> 
          <b>Sanitization</b> is the
          process of chemical or mechanical cleansing, applicable in public
          health systems. Usually used by the food industry. It reduces microbes
          on eating utensils to safe, acceptable levels for public health. <br />
          <b>Asepsis</b> is the employment of techniques (such as usage of gloves, air
          filters, uv rays etc) to achieve microbe-free environment. Antisepsis
          is the use of chemicals (antiseptics) to make skin or mucus membranes
          devoid of pathogenic microorganisms. <br /> 
          <b>Bacteriostasis</b> is a condition
          where the multiplication of the bacteria is inhibited without killing
          them. <br /> 
          <b>Bactericidal</b> is that chemical that can kill or inactivate
          bacteria. Such chemicals may be called variously depending on the
          spectrum of activity, such as bactericidal, virucidal, fungicidal,
          microbicidal, sporicidal, tuberculocidal or germicidal. <br /> 
          <b>Antibiotics</b> 
          are substances produced by one microbe that inhibits or kills another
          microbe. Often the term is used more generally to include synthetic
          and semi-synthetic antimicrobial agents.
          </p>
      </div>

      <img style={{marginTop:'50px'}} src={image} alt="" />
    </>
  );
};

export default Section1;
