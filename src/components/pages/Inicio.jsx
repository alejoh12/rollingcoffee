import banner from "../../assets/bannerHome.png";

const Inicio = () => {
  return (
    <main>
      <img
        src={banner}
        alt="Una foto de nuestra sucursal."
        className="img-fluid w-100"
      />
    </main>
  );
};

export default Inicio;
