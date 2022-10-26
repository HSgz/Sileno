const Hero = () => {
  return (
    <section className="container bg p-1 h-[90vh] mx-auto overflow-hidden">
      <div className="hero__grid--container my-16 grid grid-cols-6 grid-rows-2 mx-14 gap-4 overflow-hidden shadow-2xl h-[80%]">
        <span className="hero__img--trago-1 flex flex-col px-4">
          <h3 className="text-5xl font-light my-8">
            Experiencia, Exito y amigos
          </h3>
          <button
            type="button"
            className="border-2 border-[#B157C7] text-xl font-normal w-max p-3 transition-all duration-500 hover:outline hover:outline-1 hover:text-black hover:bg-slate-200"
          >
            Ver más
          </button>
        </span>
        <span className="hero__img--trago-2"></span>
        <span className="hero__img--trago-3 flex flex-col px-4">
          <h3 className="text-5xl font-light my-8">
            Siempre hay una ocación especial
          </h3>
          <button
            type="button"
            className="border-2 border-[#B157C7] text-xl font-normal w-max p-3 transition-all duration-500 hover:outline hover:outline-1 hover:text-black hover:bg-slate-200"
          >
            Ver más
          </button>
        </span>
        <span className="hero__img--trago-4"></span>
      </div>
    </section>
  );
};
export default Hero;
