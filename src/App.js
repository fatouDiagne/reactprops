import MyProfil from './profil/MyProfil';
import './styles/App.css';

function App() {
  const myfunction = fullname => alert(fullname)
  return (
    <div className="App">
     <MyProfil fullName="John" bio="Passionné par le developpement web" profession="Developpeur front-End"  myfunction={myfunction}>
       {'http://placeimg.com/640/360/any'}
     </MyProfil>
    </div>
  );
}

export default App;
