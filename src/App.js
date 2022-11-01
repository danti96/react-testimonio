import "./App.css";
import Testimonio from "./components/Testimonio";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestos alumnos</h1>
        <Testimonio
          title="Skype Suecia"
          subtitle="Ingenieria de Software"
          imageName="photo.jfif"
          contenido="Esse est sunt excepteur tempor sit sit non cillum cillum veniam. Commodo ad enim culpa Lorem aliquip qui. Occaecat aliquip do do in dolor elit ut adipisicing voluptate commodo culpa ipsum tempor. Proident ullamco elit consequat veniam aliqua sint. Officia elit duis excepteur fugiat nostrud deserunt et consequat quis sint irure aute amet minim. Aute dolor tempor aute adipisicing occaecat minim qui ea. Dolore pariatur occaecat esse magna aliqua eu eu."
        />
        <Testimonio
          title="Slu Brin"
          subtitle="Ingenieria de Software"
          imageName="photo.jpg"
          contenido="Esse est sunt excepteur tempor sit sit non cillum cillum veniam. Commodo ad enim culpa Lorem aliquip qui. Occaecat aliquip do do in dolor elit ut adipisicing voluptate commodo culpa ipsum tempor. Proident ullamco elit consequat veniam aliqua sint. Officia elit duis excepteur fugiat nostrud deserunt et consequat quis sint irure aute amet minim. Aute dolor tempor aute adipisicing occaecat minim qui ea. Dolore pariatur occaecat esse magna aliqua eu eu."
        />
        <Testimonio
          title="Slynth Sau"
          subtitle="Ingenieria de Software"
          imageName="photo2.jpg"
          contenido="Esse est sunt excepteur tempor sit sit non cillum cillum veniam. Commodo ad enim culpa Lorem aliquip qui. Occaecat aliquip do do in dolor elit ut adipisicing voluptate commodo culpa ipsum tempor. Proident ullamco elit consequat veniam aliqua sint. Officia elit duis excepteur fugiat nostrud deserunt et consequat quis sint irure aute amet minim. Aute dolor tempor aute adipisicing occaecat minim qui ea. Dolore pariatur occaecat esse magna aliqua eu eu."
        />
      </div>
    </div>
  );
}

export default App;
