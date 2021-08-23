import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function App() {
  let data = [
    {
     "name": "Vincent",
     "position": "Liaison",
     "mail": "Mireya.Streich@yahoo.com",
     "salary": 8445.36,
     "id": 1
    },
    {
     "name": "Chandler",
     "position": "Officer",
     "mail": "Ryleigh.Roob61@gmail.com",
     "salary": 53238.05,
     "id": 2
    },
    {
     "name": "Boyd",
     "position": "Associate",
     "mail": "Emmet.Leannon@hotmail.com",
     "salary": 79532.46,
     "id": 3
    },
    {
     "name": "Kaycee",
     "position": "Producer",
     "mail": "Yadira45@gmail.com",
     "salary": 94824.26,
     "id": 4
    },
    {
     "name": "Reyes",
     "position": "Manager",
     "mail": "Alexandrea_Roberts@yahoo.com",
     "salary": 92203.48,
     "id": 5
    },
    {
     "name": "Willard",
     "position": "Liaison",
     "mail": "Rodolfo.Wunsch@yahoo.com",
     "salary": 72312.45,
     "id": 6
    },
    {
     "name": "Jamel",
     "position": "Technician",
     "mail": "Nora.Schmeler@yahoo.com",
     "salary": 91691.16,
     "id": 7
    },
    {
     "name": "Amya",
     "position": "Administrator",
     "mail": "Lillian57@gmail.com",
     "salary": 14948.54,
     "id": 8
    },
  ];
  return (
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
              <Dashboard datas={data}></Dashboard>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
