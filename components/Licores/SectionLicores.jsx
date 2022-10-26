import Image from "next/image";
import whiskyImg from "../../assets/whisky.jpg";
import ronImg from "../../assets/ron.jpg";
import destiladosImg from "../../assets/destilados.jpg";
import vinosImg from "../../assets/vinos.jpg";
import champagneImg from "../../assets/champagne.jpg";

const licorList = [
  {
    id: 0,
    name: "Whisky",
    image: whiskyImg,
    alt: "trago de whisky",
  },
  {
    id: 1,
    name: "Ron",
    image: ronImg,
    alt: "botellas de ron",
  },
  {
    id: 2,
    name: "Destilados",
    image: destiladosImg,
    alt: "botella de vodka en un mostrador de un bar",
  },
  {
    id: 3,
    name: "Vinos",
    image: vinosImg,
    alt: "botella de vinos en una demostración",
  },
  {
    id: 4,
    name: "Champagne",
    image: champagneImg,
    alt: "sirviendo champagne en copas",
  },
];

const SectionLicores = () => {
  return (
    <section>
      <div className="p-1">
        <p className="w-4/5 border-b my-10 text-center text-6xl mx-auto leading-relaxed">
          Licores
        </p>
      </div>
      <div className="section__licores--container h-auto w-full my-8 mx-auto grid grid-cols-5 gap-5 place-content-center px-4">
        {licorList.map((item) => (
          <figure
            className="shadow-xl rounded-xl relative picture"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="h-full object-cover rounded-tl-xl rounded-br-xl"
            />
            <figcaption className="picture__container absolute top-0 left-0 w-full h-full py-14 px-5">
              <div>
                <h2 className="text-center text-3xl border-b-4 pb-2 mb-2">
                  {item.name}
                </h2>
                <p className=" leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, nemo.
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
export default SectionLicores;
