import "../stylesheets/Testimonio.css";
function Testimonio({ title, subtitle, contenido, imageName }) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${imageName}`)}
        alt="foto-testimonio-imageName"
      />
      <div className="contenedor-texto-testimonio">
        <p className="title-testimonio">{title}</p>
        <p className="subtitle-testimonio">{subtitle}</p>
        <p className="contenido-testimonio">{contenido}</p>
      </div>
    </div>
  );
}

export default Testimonio;
