import "./App.css";
import Define from "./Components/Define/Define";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Main/Section1";
import Points from "./Components/Points/Points";
import animate from "./Assets/animate.png";
import img1 from "./Assets/Pics/img1.jpg";
import img2 from "./Assets/Pics/img2.jpg";
import img3 from "./Assets/Pics/img3.jpg";
import img4 from "./Assets/Pics/img4.jpg";
import img5 from "./Assets/Pics/img5.jpg";
import img6 from "./Assets/Pics/img6.jpg";
import img7 from "./Assets/Pics/img7.jpg";
import img8 from "./Assets/Pics/img8.jpg";
import img9 from "./Assets/Pics/img9.jpg";
import img10 from "./Assets/Pics/img10.jpeg";
import img11 from "./Assets/Pics/img11.png";
import Loading from "./Components/Loading/Loading.jsx";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(1);
    }, 4500);
  }, []);

  return (
    <>
      <div style={{ display: show === 1 ? "none" : "block" }}>
        <Loading />
      </div>

      <div className= { show === 0 ? 'App display' : 'App'}>
        <Header />
        <img
          style={{
            width: "40%",
            height: "40%",
            borderRadius: "20px",
            marginTop: "15px",
          }}
          src={img11}
          alt=""
        />

        <Section1 />

        <Define
          heading={"Sunlight"}
          text={
            "The microbicidal activity of sunlight is mainly due to the presence of ultra violet rays in it. It is responsible for spontaneous sterilization in natural conditions. In tropical countries, the sunlight is more effective in killing germs due to combination of ultraviolet rays and heat. By killing bacteria suspended in water, sunlight provides natural method of disinfection of water bodies such as tanks and lakes. Sunlight is not sporicidal, hence it does not sterilize."
          }
        />
        <Define
          heading={"Heat"}
          text={
            "Heat is considered to be most reliable method of sterilization of articles that can withstand heat. Heat acts by oxidative effects as well as denaturation and coagulation of proteins. Those articles that cannot withstand high temperatures can still be sterilized at lower temperature by prolonging the duration of exposure."
          }
        />

        <Points />

        <div style={{ width: "80%" }}>
          <p className="heading">Action Of Heat</p>
          <p className="text">
            Dry heat acts by protein denaturation, oxidative damage and toxic
            effects of elevated levels of electrolytes. The moist heat acts by
            coagulation and denaturation of proteins. Moist heat is superior to
            dry heat in action. Temperature required to kill microbe by dry heat
            is more than the moist heat. Thermal death time is the minimum time
            required to kill a suspension of organisms at a predetermined
            temperature in a specified environment.
          </p>
          <br />
          <p className="heading">DRY HEAT:</p>
        </div>
        <Define
          heading={"Red Heat"}
          text={
            " Articles such as bacteriological loops, straight wires, tips of forceps and searing spatulas are sterilized by holding them in Bunsen flame till they become red hot. This is a simple method for effective sterilization of such articles, but is limited to those articles that can be heated to redness in flame."
          }
        />
        <Define
          heading={"Flaming"}
          text={
            " This is a method of passing the article over a Bunsen flame, but not heating it to redness. Articles such as scalpels, mouth of test tubes, flasks, glass slides and cover slips are passed through the flame a few times. Even though most vegetative cells are killed, there is no guarantee that spores too would die on such short exposure. This method too is limited to those articles that can be exposed to flame. Cracking of the glassware may occur."
          }
        />
        <Define
          heading={"Incineration"}
          text={
            "This is a method of destroying contaminated material by burning them in incinerator. Articles such as soiled dressings; animal carcasses, pathological material and bedding etc should be subjected to incineration. This technique results in the loss of the article, hence is suitable only for those articles that have to be disposed. Burning of polystyrene materials emits dense smoke, and hence they should not be incinerated."
          }
        />
        <Define
          heading={"Hot air oven"}
          text={
            "This method was introduced by Louis Pasteur. Articles to be sterilized are exposed to high temperature (160o C) for duration of one hour in an electrically heated oven. Since air is poor conductor of heat, even distribution of heat throughout the chamber is achieved by a fan. The heat is transferred to the article by radiation, conduction and convection. The oven should be fitted with a thermostat control, temperature indicator, meshed shelves and must have adequate insulation."
          }
        />

        <br />
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "50%" }}>
            <p className="text">
              <u>Articles sterilized:</u>Metallic instruments (like forceps,
              scalpels, scissors), glasswares (such as petri-dishes, pipettes,
              flasks, all-glass syringes), swabs, oils, grease, petroleum jelly
              and some pharmaceutical products.
            </p>
            <p className="text">
              <u>Sterilization process:</u>Articles to be sterilized must be
              perfectly dry before placing them inside to avoid breakage.
              Articles must be placed at sufficient distance so as to allow free
              circulation of air in between. Mouths of flasks, test tubes and
              both ends of pipettes must be plugged with cotton wool. Articles
              such as petri dishes and pipettes may be arranged inside metal
              canisters and then placed. Individual glass articles must be
              wrapped in kraft paper or aluminum foils.
            </p>
            <p className="text">
              <u>Sterilization cycle:</u>This takes into consideration the time
              taken for the articles to reach the sterilizing temperature,
              maintenance of the sterilizing temperature for a defined period
              (holding time) and the time taken for the articles to cool down.
              Different temperature-time relations for holding time are 60
              minutes at 160o C, 40 minutes at 170o C and 20 minutes at 180o C.
              Increasing temperature by 10 degrees shortens the sterilizing time
              by 50 percent. The hot air oven must not be opened until the
              temperature inside has fallen below 60o C to prevent breakage of
              glasswares.
            </p>
            <p className="text">
              <u>Sterilization control:</u>Three methods exist to check the
              efficacy of sterilization process, namely physical, chemical and
              biological.
            </p>
          </div>
          <img
            style={{
              width: "40%",
              height: "40%",
              borderRadius: "20px",
              marginTop: "15px",
            }}
            src={img5}
            alt=""
          />
        </div>

        <div style={{ width: "80%" }}>
          <ul style={{ marginTop: "20px", marginLeft: "20px" }}>
            <li>
              <p className="text">
                Physical: Temperature chart recorder and thermocouple.
              </p>
            </li>
            <li>
              <p className="text">
                Chemical: Browne’s tube No.3 (green spot, color changes from red
                to green)
              </p>
            </li>
            <li>
              <p className="text">
                Biological: 106 spores of Bacillus subtilis var niger or
                Clostridium tetani on paper strips are placed inside envelopes
                and then placed inside the hot air oven. Upon completion of
                sterilization cycle, the strips are removed and inoculated into
                thioglycollate broth or cooked meat medium and incubated at 37o
                C for 3-5 days. Proper sterilization should kill the spores and
                there should not be any growth.
              </p>
            </li>
          </ul>

          <p className="text">
            <u>Advantages:</u>It is an effective method of sterilization of heat
            stable articles. The articles remain dry after sterilization. This
            is the only method of sterilizing oils and powders.
          </p>

          <p className="text">
            <u>Disadvantages</u> <br />
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Since air is poor conductor of heat, hot air has poor
                penetration.
              </li>
              <li>Cotton wool and paper may get slightly charred.</li>
              <li>Glasses may become smoky.</li>
              <li>Takes longer time compared to autoclave.</li>
            </ul>
          </p>
        </div>

        <Define
          heading={"Infra red rays"}
          text={
            "Infrared rays bring about sterilization by generation of heat. Articles to be sterilized are placed in a moving conveyer belt and passed through a tunnel that is heated by infrared radiators to a temperature of 180o C. The articles are exposed to that temperature for a period of 7.5 minutes. Articles sterilized included metallic instruments and glassware. It is mainly used in central sterile supply department. It requires special equipments, hence is not applicable in diagnostic laboratory. Efficiency can be checked using Browne’s tube No.4 (blue spot)."
          }
        />
        <br />
        <div style={{ width: "80%" }}>
          <p className="heading">MOIST HEAT:</p>
          <p className="text">
            Moist heat acts by coagulation and denaturation of proteins.
          </p>
          <p className="text" style={{ fontWeight: "bolder" }}>
            At temperature below 100C:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <p className="text">
                <u>Pasteurization :</u>This process was originally employed by
                Louis Pasteur. Currently this procedure is employed in food and
                dairy industry. There are two methods of pasteurization, the
                holder method (heated at 63o C for 30 minutes) and flash method
                (heated at 72o C for 15 seconds) followed by quickly cooling to
                13o C. Other pasteurization methods include Ultra-High
                Temperature (UHT), 140o C for 15 sec and 149o C for 0.5 sec.
                This method is suitable to destroy most milk borne pathogens
                like Salmonella, Mycobacteria, Streptococci, Staphylococci and
                Brucella, however Coxiella may survive pasteurization. Efficacy
                is tested by phosphatase test and methylene blue test.
              </p>
            </li>
            <li>
              <p className="text">
                <u>Vaccine bath :</u>The contaminating bacteria in a vaccine
                preparation can be inactivated by heating in a water bath at 60o
                C for one hour. Only vegetative bacteria are killed and spores
                survive
              </p>
            </li>
            <li>
              <p className="text">
                <u>Serum bath :</u>The contaminating bacteria in a serum
                preparation can be inactivated by heating in a water bath at 56o
                C for one hour on several successive days. Proteins in the serum
                will coagulate at higher temperature. Only vegetative bacteria
                are killed and spores survive.
              </p>
            </li>
            <li>
              <p className="text">
                <u>Inspissation :</u>This is a technique to solidify as well as
                disinfect egg and serum containing media. The medium containing
                serum or egg are placed in the slopes of an inspissator and
                heated at 80-85o C for 30 minutes on three successive days. On
                the first day, the vegetative bacteria would die and those
                spores that germinate by next day are then killed the following
                day. The process depends on germination of spores in between
                inspissation. If the spores fail to germinate then this
                technique cannot be considered sterilization.
              </p>
            </li>
          </ul>

          <br />

          <p className="text" style={{ fontWeight: "bolder" }}>
            At temperature 100C:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <p className="text">
                <u>Boiling :</u> Boiling water (100o C) kills most vegetative
                bacteria and viruses immediately. Certain bacterial toxins such
                as Staphylococcal enterotoxin are also heat resistant. Some
                bacterial spores are resistant to boiling and survive; hence
                this is not a substitute for sterilization. The killing activity
                can be enhanced by addition of 2% sodium bicarbonate. When
                absolute sterility is not required, certain metal articles and
                glasswares can be disinfected by placing them in boiling water
                for 10-20 minutes. The lid of the boiler must not be opened
                during the period.
              </p>
            </li>
            <li>
              <p className="text">
                <u>Steam at 100C :</u> Instead of keeping the articles in
                boiling water, they are subjected to free steam at 100o C.
                Traditionally Arnold’s and Koch’s steamers were used. An
                autoclave (with discharge tap open) can also serve the same
                purpose. A steamer is a metal cabinet with perforated trays to
                hold the articles and a conical lid. The bottom of steamer is
                filled with water and heated. The steam that is generated
                sterilizes the articles when exposed for a period of 90 minutes.
                Media such as TCBS, DCA and selenite broth are sterilized by
                steaming. Sugar and gelatin in medium may get decomposed on
                autoclaving, hence they are exposed to free steaming for 20
                minutes for three successive days. This process is known as
                tyndallisation (after John Tyndall) or fractional sterilization
                or intermittent sterilization. The vegetative bacteria are
                killed in the first exposure and the spores that germinate by
                next day are killed in subsequent days. The success of process
                depends on the germination of spores.
              </p>
            </li>
          </ul>

          <br />

          <p className="text" style={{ fontWeight: "bolder" }}>
            At temperature above 100C:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <p className="text">
                <u>Autoclave :</u> Sterilization can be effectively achieved at
                a temperature above 100o C using an autoclave. Water boils at
                100o C at atmospheric pressure, but if pressure is raised, the
                temperature at which the water boils also increases. In an
                autoclave the water is boiled in a closed chamber. As the
                pressure rises, the boiling point of water also raises. At a
                pressure of 15 lbs inside the autoclave, the temperature is said
                to be 121o C. Exposure of articles to this temperature for 15
                minutes sterilizes them. To destroy the infective agents
                associated with spongiform encephalopathies (prions), higher
                temperatures or longer times are used; 135o C or 121o C for at
                least one hour are recommended.
              </p>
            </li>
            <li>
              <p className="text">
                <u>Advantages of steam :</u> It has more penetrative power than
                dry air, it moistens the spores (moisture is essential for
                coagulation of proteins), condensation of steam on cooler
                surface releases latent heat, condensation of steam draws in
                fresh steam.
              </p>
            </li>
            <li>
              <p className="text">
                <u>Different types of autoclave :</u> Simple “pressure-cooker
                type” laboratory autoclave, Steam jacketed downward displacement
                laboratory autoclave and high pressure pre-vacuum autoclave
              </p>
            </li>
          </ul>
        </div>

        <br />
        <p className="heading" style={{ textAlign: "left", width: "85%" }}>
          Construction And Operation Of Autoclave
        </p>
        <br />
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <br />
          <div style={{ width: "70%" }}>
            <p className="text">
              A simple autoclave has vertical or horizontal cylindrical body
              with a heating element, a perforated try to keep the articles, a
              lid that can be fastened by screw clamps, a pressure gauge, a
              safety valve and a discharge tap. The articles to be sterilized
              must not be tightly packed. The screw caps and cotton plugs must
              be loosely fitted. The lid is closed but the discharge tap is kept
              open and the water is heated. As the water starts boiling, the
              steam drives air out of the discharge tap. When all the air is
              displaced and steam start appearing through the discharge tap, the
              tap is closed. The pressure inside is allowed to rise upto 15 lbs
              per square inch. At this pressure the articles are held for 15
              minutes, after which the heating is stopped and the autoclave is
              allowed to cool. Once the pressure gauge shows the pressure equal
              to atmospheric pressure, the discharge tap is opened to let the
              air in. The lid is then opened and articles removed. <br />
              <u>Articles sterilized:</u>Culture media, dressings, certain
              equipment, linen etc. <br /> <u>Precautions:</u> Articles should
              not be tightly packed, the autoclave must not be overloaded, air
              discharge must be complete and there should not be any residual
              air trapped inside, caps of bottles and flasks should not be
              tight, autoclave must not be opened until the pressure has fallen
              or else the contents will boil over, articles must be wrapped in
              paper to prevent drenching, bottles must not be overfilled. <br />{" "}
              <u>Advantage:</u> Very effective way of sterilization, quicker
              than hot air oven. <br /> <u>Disadvantages:</u> Drenching and
              wetting or articles may occur, trapped air may reduce the
              efficacy, takes long time to cool. <br />{" "}
              <u>Sterilization control:</u> Physical method includes automatic
              process control, thermocouple and temperature chart recorder.
              Chemical method includes Browne’s tube No.1 (black spot) and
              succinic acid (whose melting point is 121o C) and Bowie Dick tape.
              Bowie Dick tape is applied to articles being autoclaved. If the
              process has been satisfactory, dark brown stripes will appear
              across the tape. Biological method includes a paper strip
              containing 106 spores of Geobacillus stearothermophilus.
            </p>
          </div>
          <img style={{ width: "25%", height: "25%" }} src={img2} alt="" />
        </div>

        <br />

        <div style={{ width: "80%" }}>
          <p className="heading">RADIATION:</p>
          <p className="text">
            Two types of radiation are used, ionizing and non-ionizing.
            Non-ionizing rays are low energy rays with poor penetrative power
            while ionizing rays are high-energy rays with good penetrative
            power. Since radiation does not generate heat, it is termed "cold
            sterilization". In some parts of Europe, fruits and vegetables are
            irradiated to increase their shelf life up to 500 percent.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <p className="text">
                <u>
                  {" "}
                  <b>Non-ionizing rays:</b>{" "}
                </u>
                Rays of wavelength longer than the visible light are
                non-ionizing. Microbicidal wavelength of UV rays lie in the
                range of 200-280 nm, with 260 nm being most effective. UV rays
                are generated using a high-pressure mercury vapor lamp. It is at
                this wavelength that the absorption by the microorganisms is at
                its maximum, which results in the germicidal effect. UV rays
                induce formation of thymine-thymine dimers, which ultimately
                inhibits DNA replication. UV readily induces mutations in cells
                © Sridhar Rao P.N (www.microrao.com) irradiated with a
                non-lethal dose. Microorganisms such as bacteria, viruses,
                yeast, etc. that are exposed to the effective UV radiation are
                inactivated within seconds. Since UV rays don’t kill spores,
                they are considered to be of use in surface disinfection. UV
                rays are employed to disinfect hospital wards, operation
                theatres, virus laboratories, corridors, etc. Disadvantages of
                using uv rays include low penetrative power, limited life of the
                uv bulb, some bacteria have DNA repair enzymes that can overcome
                damage caused by uv rays, organic matter and dust prevents its
                reach, rays are harmful to skin and eyes. It doesn't penetrate
                glass, paper or plastic.
              </p>
            </li>

            <li>
              <p className="text">
                <u>
                  {" "}
                  <b>Ionizing rays:</b>{" "}
                </u>
                Ionizing rays are of two types, particulate and electromagnetic
                rays.
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    Electron beams are particulate in nature while gamma rays
                    are electromagnetic in nature. Highspeed electrons are
                    produced by a linear accelerator from a heated cathode.
                    Electron beams are employed to sterilize articles like
                    syringes, gloves, dressing packs, foods and pharmaceuticals.
                    Sterilization is accomplished in few seconds. Unlike
                    electromagnetic rays, the instruments can be switched off.
                    Disadvantage includes poor penetrative power and requirement
                    of sophisticated equipment
                  </li>
                  <li>
                    Electromagnetic rays such as gamma rays emanate from nuclear
                    disintegration of certain radioactive isotopes (Co60,
                    Cs137). They have more penetrative power than electron beam
                    but require longer time of exposure. These high-energy
                    radiations damage the nucleic acid of the microorganism. A
                    dosage of 2.5 megarads kills all bacteria, fungi, viruses
                    and spores. It is used commercially to sterilize disposable
                    petri dishes, plastic syringes, antibiotics, vitamins,
                    hormones, glasswares and fabrics. Disadvantages include;
                    unlike electron beams, they can’t be switched off,
                    glasswares tend to become brownish, loss of tensile strength
                    in fabric. Gamma irradiation impairs the flavour of certain
                    foods. Bacillus pumilus E601 is used to evaluate
                    sterilization process.
                  </li>
                </ul>
              </p>
            </li>
          </ul>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <br />
            <div>
              <p className="heading">FILTRATION:</p>
              <p className="text">
                Filtration does not kill microbes, it separates them out.
                Membrane filters with pore sizes between 0.2-0.45 µm are
                commonly used to remove particles from solutions that can't be
                autoclaved. It is used to remove microbes from heat labile
                liquids such as serum, antibiotic solutions, sugar solutions,
                urea solution. Various applications of filtration include
                removing bacteria from ingredients of culture media, preparing
                suspensions of viruses and phages free of bacteria, measuring
                sizes of viruses, separating toxins from culture filtrates,
                counting bacteria, clarifying fluids and purifying hydatid
                fluid. Filtration is aided by using either positive or negative
                pressure using vacuum pumps. The older filters made of
                earthenware or asbestos are called depth filters.
              </p>
            </div>
            <img
              style={{ width: "25%", height: "25%", borderRadius: "20px" }}
              src={img9}
              alt=""
            />
          </div>
          <br /> <br />
          <p className="heading">Different types of filters are:</p>
          <ul style={{ marginLeft: "20px", listStyle: "a" }}>
            <li>
              <p className="text">
                <b>Earthenware filters:</b>These filters are made up of
                diatomaceous earth or porcelain. They are usually baked into the
                shape of candle. Different types of earthenware filters are:
              </p>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <p className="text">
                    <u>Pasteur-Chamberland filter:</u>These candle filters are
                    from France and are made up of porcelain (sand and kaolin).
                    Similar filter from Britain is Doulton. Chamberland filters
                    are made with various porosities, which are graded as L1,
                    L1a, L2, L3, L5, L7, L9 and L11. Doulton filters are P2, P5
                    and P11.
                  </p>
                </li>
                <li>
                  <p className="text">
                    <u>Berkefeld filter:</u>These are made of Kieselguhr, a
                    fossilized diatomaceous earth found in Germany. They are
                    available in three grades depending on their porosity (pore
                    size); they are V (veil), N (normal) and W (wenig). Quality
                    of V grade filter is checked using culture suspension of
                    Serrtia marcescens (0.75 µm).
                  </p>
                </li>
                <li>
                  <p className="text">
                    <u>Mandler filter:</u>This filter from America is made of
                    kieselguhr, asbestos and plaster of Paris.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className="text">
                <b>Asbestos filters:</b>These filters are made from chrysotile
                type of asbestos, chemically composed of magnesium silicate.
                They are pressed to form disc, which are to be used only once.
                The disc is held inside a metal mount, which is sterilized by
                autoclaving. They are available in following grades; HP/PYR (for
                removal of pyrogens), HP/EKS (for absolute sterility) and HP/EK
                (for claryfying).
              </p>
            </li>
            <li>
              <p className="text">
                <b>Sintered glass filters:</b>These are made from finely ground
                glass that are fused sufficiently to make small particles adhere
                to each other. They are usually available in the form of disc
                fused into a glass funnel. Filters of Grade 5 have average pore
                diameter of 1-1.5 µm. They are washed in running water in
                reverse direction and cleaned with warm concentrated H2SO4 and
                sterilized by autoclaving.
              </p>
            </li>
            <li>
              <p className="text">
                <b>Membrane filters:</b>These filters are made from a variety of
                polymeric materials such as cellulose nitrate, cellulose
                diacetate, polycarbonate and polyester. The older type of
                membrane, called gradocol (graded colloidion) membrane was
                composed of cellulose nitrate. Gradocol membranes have average
                pore diameter of 3-10 µm. The newer ones are composed of
                cellulose diacetate. These membranes have a pore diameter
                ranging from 0.015 µm to 12 µm. These filters are sterilized by
                autoclaving. Membrane filters are made in two ways, the
                capillary pore membranes have pores produced by radiation while
                the labyrinthine pore membranes are produced by forced
                evaporation of solvents from cellulose esters.
              </p>
            </li>
          </ul>
          <br />
          <p className="text">
            The disadvantages of depth filters are migration of filter material
            into the filtrate, absorption or retention of certain volume of
            liquid by the filters, pore sizes are not definite and viruses and
            mycoplasma could pass through. The advantages of membrane filters
            are known porosity, no retention of fluids, reusable after
            autoclaving and compatible with many chemicals. However, membrane
            filters have little loading capacity and are fragile.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <img
            style={{ width: "25%", height: "25%", borderRadius: "20px" }}
            src={img7}
            alt=""
          />
          <div style={{ width: "70%" }}>
            <Define
              heading={"Air Filters"}
              text={
                "Air can be filtered using HEPA (High Efficiency Particle Air) filters. They are usually used in biological safety cabinets. HEPA filters are at least 99.97% efficient for removing particles >0.3 µm in diameter. Examples of areas where HEPA filters are used include rooms housing severely neutropenic patients and those operating rooms designated for orthopedic implant procedures. HEPA filter efficiency is monitored with the dioctylphthalate (DOP) particle test using particles that are 0.3 µm in diameter."
              }
            />
            <Define
              heading={"SONIC AND ULTRASONIC VIBRATIONS"}
              text={
                "Sound waves of frequency >20,000 cycle/second kills bacteria and some viruses on exposing for one hour. Microwaves are not particularly antimicrobial in themselves, rather the killing effect of microwaves are largely due to the heat that they generate. High frequency sound waves disrupt cells. They are used to clean and disinfect instruments as well as to reduce microbial load. This method is not reliable since many viruses and phages are not affected by these waves."
              }
            />
          </div>
        </div>

        <br />
        <div style={{ width: "80%" }}>
          <p className="heading">CHEMICAL METHODS OF DISINFECTION:</p>
          <p className="text">
            Disinfectants are those chemicals that destroy pathogenic bacteria
            from inanimate surfaces. Some chemical have very narrow spectrum of
            activity and some have very wide. Those chemicals that can sterilize
            are called chemisterilants. Those chemicals that can be safely
            applied over skin and mucus membranes are called antiseptics. An
            ideal antiseptic or disinfectant should have following properties:
          </p>
          <br />
          <ul className="text" style={{ marginLeft: "20px" }}>
            <li>Should have wide spectrum of activity</li>
            <li>
              Should be able to destroy microbes within practical period of time
            </li>
            <li>Should be active in the presence of organic matter</li>
            <li>Should make effective contact and be wettable</li>
            <li>Should be active in any pH</li>
            <li>Should be stable</li>
            <li>Should have long shelf life</li>
            <li>Should be speedy</li>
            <li>Should have high penetrating power</li>
            <li>
              Should be non-toxic, non-allergenic, non-irritative or
              non-corrosive
            </li>
            <li>Should not have bad odour</li>
            <li>Should not leave non-volatile residue or stain</li>
            <li>Efficacy should not be lost on reasonable dilution</li>
            <li>Should not be expensive and must be available easily</li>
          </ul>
          <br />
          <p className="text">
            Such an ideal disinfectant is not yet available. The level of
            disinfection achieved depends on contact time, temperature, type and
            concentration of the active ingredient, the presence of organic
            matter, the type and quantum of microbial load. The chemical
            disinfectants at working concentrations rapidly lose their strength
            on standing.
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <p className="text">
                Based on consistency <br />
                <ul style={{ marginLeft: "20px" }}>
                  <li>Liquid (E.g., Alcohols, Phenols)</li>
                  <li>Gaseous (Formaldehyde vapor, Ethylene oxide)</li>
                </ul>
              </p>
            </li>
            <li>
              <p className="text">
                Based on spectrum of activity <br />
                <ul style={{ marginLeft: "20px" }}>
                  <li>High level</li>
                  <li>Intermediate level</li>
                  <li>Low level</li>
                </ul>
              </p>
            </li>
            <li>
              <p className="text">
                Based on mechanism of action <br />
                <ul style={{ marginLeft: "20px" }}>
                  <li>Action on membrane (E.g., Alcohol, detergent)</li>
                  <li>
                    Denaturation of cellular proteins (E.g., Alcohol, Phenol)
                  </li>
                  <li>
                    Oxidation of essential sulphydryl groups of enzymes (E.g.,
                    H2O2, Halogens)
                  </li>
                  <li>
                    Alkylation of amino-, carboxyl- and hydroxyl group (E.g.,
                    Ethylene Oxide, Formaldehyde)
                  </li>
                  <li>
                    Damage to nucleic acids (Ethylene Oxide, Formaldehyde)
                  </li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <br />

        <img
          style={{ width: "25%", height: "25%", borderRadius: "20px" }}
          src={img8}
          alt=""
        />

        <br />

        <div style={{ width: "80%" }}>
          <p className="heading">ALCOHOLS:</p>
          <p className="text">
            <b>Mode of action:</b>
            Alcohols dehydrate cells, disrupt membranes and cause coagulation of
            protein. <br /> <b>Examples:</b> Ethyl alcohol, isopropyl alcohol
            and methyl alcohol <br />
            <b>Application:</b> A 70% aqueous solution is more effective at
            killing microbes than absolute alcohols. 70% ethyl alcohol (spirit)
            is used as antiseptic on skin. Isopropyl alcohol is preferred to
            ethanol. It can also be used to disinfect surfaces. It is used to
            disinfect clinical thermometers. Methyl alcohol kills fungal spores,
            hence is useful in disinfecting inoculation hoods. <br />{" "}
            <b>Disadvantages:</b> Skin irritant, volatile (evaporates rapidly),
            inflammable
          </p>

          <br />
          <p className="heading">ALDEHYDES:</p>
          <p className="text">
            <b>Mode of action:</b>
            Acts through alkylation of amino-, carboxyl- or hydroxyl group, and
            probably damages nucleic acids. It kills all microorganisms,
            including spores. <br /> <b>Examples:</b> Formaldehyde,
            Gluteraldehyde <br />
            <b>Application:</b> 40% Formaldehyde (formalin) is used for surface
            disinfection and fumigation of rooms, chambers, operation theatres,
            biological safety cabinets, wards, sick rooms etc. Fumigation is
            achieved by boiling formalin, heating paraformaldehyde or treating
            formalin with potassium permanganate. It also sterilizes bedding,
            furniture and books. 10% formalin with 0.5% tetraborate sterilizes
            clean metal instruments. 2% gluteraldehyde is used to sterilize
            thermometers, cystoscopes, bronchoscopes, centrifuges, anasethetic
            equipments etc. An exposure of at least 3 hours at alkaline pH is
            required for action by gluteraldehyde. 2% formaldehyde at 40o C for
            20 minutes is used to disinfect wool and 0.25% at 60o C for six
            hours to disinfect animal hair and bristles <br />{" "}
            <b>Disadvantages:</b> Vapors are irritating (must be neutralized by
            ammonia), has poor penetration, leaves non-volatile residue,
            activity is reduced in the presence of protein. Gluteraldehyde
            requires alkaline pH and only those articles that are wettable can
            be sterilized.
          </p>

          <br />
          <p className="heading">PHENOL:</p>
          <p className="text">
            <b>Mode of action:</b>
            Act by disruption of membranes, precipitation of proteins and
            inactivation of enzymes. <br /> <b>Examples:</b> 5% phenol, 1-5%
            Cresol, 5% Lysol (a saponified cresol), hexachlorophene,
            chlorhexidine, chloroxylenol (Dettol) <br />
            <b>Application:</b> Joseph Lister used it to prevent infection of
            surgical wounds. Phenols are coal-tar derivatives. They act as
            disinfectants at high concentration and as antiseptics at low
            concentrations. They are bactericidal, fungicidal, mycobactericidal
            but are inactive against spores and most viruses. They are not
            readily inactivated by organic matter. The corrosive phenolics are
            used for disinfection of ward floors, in discarding jars in
            laboratories and disinfection of bedpans. Chlorhexidine can be used
            in an isopropanol solution for skin disinfection, or as an aqueous
            solution for wound irrigation. It is often used as an antiseptic
            hand wash. 20% Chlorhexidine gluconate solution is used for
            pre-operative hand and skin preparation and for general skin
            disinfection. Chlorhexidine gluconate is also mixed with quaternary
            ammonium compounds such as cetrimide to get stronger and broader
            antimicrobial effects (eg. Savlon). Chloroxylenols are less irritant
            and can be used for topical purposes and are more effective against
            gram positive bacteria than gram negative bacteria. Hexachlorophene
            is chlorinated diphenyl and is much less irritant. It has marked
            effect over gram positive bacteria but poor effect over gram
            negative bacteria, mycobacteria, fungi and viruses. Triclosan is an
            organic phenyl ether with good activity against gram positive
            bacteria and effective to some extent against many gram negative
            bacteria including Pseudomonas. It also has fair activity on fungi
            and viruses. <br /> <b>Disadvantages:</b> It is toxic, corrosive and
            skin irritant. Chlorhexidine is inactivated by anionic soaps.
            Chloroxylenol is inactivated by hard water.
          </p>

          <br />
          <p className="heading">HALOGENS:</p>
          <p className="text">
            <b>Mode of action:</b>
            They are oxidizing agents and cause damage by oxidation of essential
            sulfydryl groups of enzymes. Chlorine reacts with water to form
            hypochlorous acid, which is microbicidal. <br /> <b>
              Examples:
            </b>{" "}
            Chlorine compounds (chlorine, bleach, hypochlorite) and iodine
            compounds (tincture iodine, iodophores) <br />
            <b>Application:</b> Tincture of iodine (2% iodine in 70% alcohol) is
            an antiseptic. Iodine can be combined with neutral carrier polymers
            such as polyvinylpyrrolidone to prepare iodophores such as
            povidone-iodine. Iodophores permit slow release and reduce the
            irritation of the antiseptic. For hand washing iodophores are
            diluted in 50% alcohol. 10% Povidone Iodine is used undiluted in pre
            and postoperative skin disinfection. Chlorine gas is used to bleach
            water. Household bleach can be used to disinfect floors. Household
            bleach used in a stock dilution of 1:10. In higher concentrations
            chlorine is used to disinfect swimming pools. 0.5% sodium
            hypochlorite is used in serology and virology. Used at a dilution of
            1:10 in decontamination of spillage of infectious material. Mercuric
            chloride is used as a disinfectant. <br /> <b>Disadvantages:</b>{" "}
            They are rapidly inactivated in the presence of organic matter.
            Iodine is corrosive and staining. Bleach solution is corrosive and
            will corrode stainless steel surfaces.
          </p>

          <br />
          <p className="heading">HEAVY METALS:</p>
          <p className="text">
            <b>Mode of action:</b>
            Act by precipitation of proteins and oxidation of sulfydryl groups.
            They are bacteriostatic. <br /> <b>Examples:</b> Mercuric chloride,
            silver nitrate, copper sulfate, organic mercury salts (e.g.,
            mercurochrome, merthiolate) <br />
            <b>Application:</b> 1% silver nitrate solution can be applied on
            eyes as treatment for opthalmia neonatorum (Crede’s method). This
            procedure is no longer followed. Silver sulphadiazine is used
            topically to help to prevent colonization and infection of burn
            tissues. Mercurials are active against viruses at dilution of 1:500
            to 1:1000. Merthiolate at a concentration of 1:10000 is used in
            preservation of serum. Copper salts are used as a fungicide. <br />{" "}
            <b>Disadvantages:</b> Mercuric chloride is highly toxic, are readily
            inactivated by organic matter.
          </p>

          <br />
          <p className="heading">SURFACE ACTIVE AGENTS:</p>
          <p className="text">
            <b>Mode of action:</b>
            They have the property of concentrating at interfaces between lipid
            containing membrane of bacterial cell and surrounding aqueous
            medium. These compounds have long chain hydrocarbons that are fat
            soluble and charged ions that are water-soluble. Since they contain
            both of these, they concentrate on the surface of membranes. They
            disrupt membrane resulting in leakage of cell constituents. <br />{" "}
            <b>Examples:</b> These are soaps or detergents. Detergents can be
            anionic or cationic. Detergents containing negatively charged long
            chain hydrocarbon are called anionic detergents. These include soaps
            and bile salts. If the fat-soluble part is made to have a positive
            charge by combining with a quaternary nitrogen atom, it is called
            cationic detergents. Cationic detergents are known as quaternary
            ammonium compounds (or quat). Cetrimide and benzalkonium chloride
            act as cationic detergents. <br />
            <b>Application:</b> They are active against vegetative cells,
            Mycobacteria and enveloped viruses. They are widely used as
            disinfectants at dilution of 1-2% for domestic use and in hospitals.{" "}
            <br /> <b>Disadvantages:</b> Their activity is reduced by hard
            water, anionic detergents and organic matter. Pseudomonas can
            metabolise cetrimide, using them as a carbon, nitrogen and energy
            source.
          </p>
          <br />
          <div style={{ display: "flex", gap: "2rem" }}>
            <div style={{ width: "70%" }}>
              <p className="heading">DYES:</p>
              <p className="text">
                <b>Mode of Action:</b>
                Acridine dyes are bactericidal because of their interaction with
                bacterial nucleic acids. <br /> <b>Examples:</b> Aniline dyes
                such as crystal violet, malachite green and brilliant green.
                Acridine dyes such as acriflavin and aminacrine. Acriflavine is
                a mixture of proflavine and euflavine. Only euflavine has
                effective antimicrobial properties. A related dye, ethidium
                bromide, is also germicidal. It intercalates between base pairs
                in DNA. They are more effective against gram positive bacteria
                than gram negative bacteria and are more bacteriostatic in
                action. <br />
                <b>Application:</b> They may be used topically as antiseptics to
                treat mild burns. They are used as paint on the skin to treat
                bacterial skin infections. The dyes are used as selective agents
                in certain selective media.
              </p>

              <br />
              <p className="heading">HYDROGEN PEROXIDE:</p>
              <p className="text">
                <b>Mode of action:</b>
                It acts on the microorganisms through its release of nascent
                oxygen. Hydrogen peroxide produces hydroxyl-free radical that
                damages proteins and DNA <br /> <b>Application:</b> It is used
                at 6% concentration to decontaminate the instruments, equipments
                such as ventilators. 3% Hydrogen Peroxide Solution is used for
                skin disinfection and deodorising wounds and ulcers. Strong
                solutions are sporicidal.
                <br />
                <b>Disadvantages:</b> Decomposes in light, broken down by
                catalase, proteinaceous organic matter drastically reduces its
                activity
              </p>

              <br />
              <p className="heading">ETHYLENE OXIDE (EO):</p>
              <p className="text">
                <b>Mode of action:</b>
                It is an alkylating agent. It acts by alkylating sulfydryl-,
                amino-, carboxyl- and hydroxyl- groups.
                <br />
                <b>Properties:</b>
                It is a cyclic molecule, which is a colorless liquid at room
                temperature. It has a sweet ethereal odor, readily polymerizes
                and is flammable.
                <br />
                <b>Application:</b> It is a highly effective chemisterilant,
                capable of killing spores rapidly. Since it is highly flammable,
                it is usually combined with CO2 (10% CO2+ 90% EO) or
                dichlorodifluoromethane. It requires presence of humidity. It
                has good penetration and is well absorbed by porous material. It
                is used to sterilize heat labile articles such as bedding,
                textiles, rubber, plastics, syringes, disposable petri dishes,
                complex apparatus like heart-lung machine, respiratory and
                dental equipments. <br />
                Efficiency testing is done using Bacillus subtilis var niger.
                <br />
                <b>Disadvantages:</b> It is highly toxic, irritating to eyes,
                skin, highly flammable, mutagenic and carcinogenic.
              </p>
            </div>
            <img style={{ borderRadius: "20px" }} src={img10} alt="" />
          </div>

          <br />
          <p className="heading">BETA-PROPIOLACTONE (BPL):</p>
          <p className="text">
            <b>Mode of action:</b>
            It is an alkylating agent and acts through alkylation of carboxyl-
            and hydroxyl- groups.
            <br />
            <b>Properties:</b>
            It is a colorless liquid with pungent to slightly sweetish smell. It
            is a condensation product of ketane with formaldehyde.
            <br />
            <b>Application:</b> It is an effective sporicidal agent, and has
            broad-spectrum activity. 0.2% is used to sterilize biological
            products. It is more efficient in fumigation that formaldehyde. It
            is used to sterilize vaccines, tissue grafts, surgical instruments
            and enzymes
            <br />
            <b>Disadvantages:</b> It has poor penetrating power and is a
            carcinogen.
          </p>

          <br />
          <p className="heading">PHYSIO-CHEMICAL METHOD:</p>
          <p className="text">
            <b>Mode of action:</b>
            A physio-chemical method adopts both physical and chemical method.
            Use of steamformaldehyde is a physio-chemical method of
            sterilization, which takes into account action of steam as well as
            that of formaldehyde. Saturated steam at a pressure of 263 mm has a
            temperature of 70o C. The air is removed from the autoclave chamber
            and saturated steam at sub-atmospheric pressure is flushed in.
            Formaldehyde is then injected with steam in a series of pulses, each
            of 5-10 minutes. The articles are held at this holding temperature
            for one hour. Formaldehyde is then flushed by inflow of steam.
            <br />
            <b>Disadvantages:</b> Condensation of formaldehyde occurs and
            induction of large volume of formaldehyde wets the steam resulting
            in loss of latent heat.
            <br />
            <b>Sterilization control:</b> using paper strips containing 106
            spores of G.stearothermophilus
          </p>

          <br />
          <p className="heading">TESTING OF DISINFECTANTS:</p>
          <p className="text">
            A disinfectant must be tested to know the required effective
            dilution, the time taken to effect disinfection and to periodically
            monitor its activity. As disinfectants are known to lose their
            activity on standing as well as in the presence of organic matter,
            their activity must be periodically tested.
          </p>
          <br />
          <p className="text" style={{ fontWeight: "700" }}>
            Different methods are:
          </p>
          <ul className="text" style={{ marginLeft: "20px" }}>
            <li>Koch’s method</li>
            <li>Rideal Walker Method</li>
            <li>Chick Martin test</li>
            <li>Capacity use dilution test (Kelsey-Sykes test)</li>
            <li>In-use test</li>
          </ul>
          <br />
        </div>
        <Define
          heading={"Koch’s method"}
          text={
            "Spores of Bacillus anthracis were dried on silk thread and were subjected to action of disinfectants. Later, it was washed and transferred to solid medium."
          }
        />
        <Define
          heading={"Rideal Walker method"}
          text={
            "This method relies on the estimation of phenol coefficient. Phenol coefficient of a disinfectant is calculated by dividing the dilution of test disinfectant by the dilution of phenol that disinfects under predetermined conditions. Both the phenol and the test disinfectant are diluted from 1/95 to 1/115 and their bactericidal activity is determined against Salmonella typhi suspension. Subcultures are performed from both the test and phenol at intervals of 2.5, 5, 7.5 and 10 minutes. The plates are incubated for 48-72 hours at 37°C. That dilution of disinfectant which disinfects the suspension in a given time is divided by that dilution of phenol which disinfects the suspension in same time gives its phenol coefficient.Disadvantages of the Rideal-Walker test are: No organic matter is included; the microorganism Salmonella typhi may not be appropriate; the time allowed for disinfection is short; it should be used to evaluate phenolic type disinfectants only."
          }
        />
        <Define
          heading={"Chick Martin test"}
          text={
            "This test also determines the phenol coefficient of the test disinfectant. Unlike in Rideal Walker method where the test is carried out in water, the disinfectants are made to act in the presence of yeast suspension (or 3% dried human feces). Time for subculture is fixed at 30 minutes and the organism used to test efficacy is S.typhi as well as S.aureus. The phenol coefficient is lower than that given by Rideal Walker method"
          }
        />
        <Define
          heading={"Capacity use dilution test (Kelsey-Sykes test)"}
          text={
            'Inoculum of four different test organisms, namely Staphylococcus aureus, Escherichia coli, Pseudomonas aeruginosa and Proteus vulgaris are added to the disinfectant in three successive. Dried yeast is included to simulate presence of organic matter. The method can be carried out under "clean" or "dirty" conditions. The dilutions of the disinfectant are made in hard water for clean conditions and in yeast suspension for dirty conditions. Test organism alone or with yeast is added at 0,10 and 20 minutes interval. The contact time of disinfectant and test organism is 8 min. The disinfectant is evaluated on its ability to kill microorganisms or lack of it and the result is reported as a pass or a fail and not as a coefficient. The capacity test of Kelsey and Sykes gives a good guideline for the dilution of the preparation to be used. Disadvantage of this test is the fact that it is rather complicated.'
          }
        />
        <Define
          heading={"In-use test"}
          text={
            "The routine monitoring of disinfectant in use can be done by the ‘in use’ test of Maurer. This test is intended to estimate the number of living organism in a vessel of disinfectant in actual use. The disinfectant that is already in use is diluted 1 in 10 by mixing 1 ml of the disinfectant with 9 ml of sterile nutrient broth. Ten drops of the diluted disinfectant (each 0.02 ml) is placed on two nutrient agar plates. One plate is incubated at 37o C for 3 days while the other is held at room temperature for 7 days. The number of drops that yielded growth is counted after incubation. If there growth in more than five drops on either plate, it represents failure of disinfectant."
          }
        />
        <div style={{ marginTop: "20px" }}></div>
      </div>
    </>
  );
}

export default App;
