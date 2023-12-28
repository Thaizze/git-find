import { Header } from "../../components/Header";
import Items from "../../components/Items";
import background from "../../assets/background.png";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} alt="Background Git Hub" className="background"/>
        <div className="info">
          <section>
            <input className="user" placeholder="@username" />
            <button className="search">Buscar</button>
          </section>

          <section className="profile">
            <div>
              <img src="https://casadosoldador.com.br/img/default/footer/norton.png" alt="Foto de perfil" />
            </div>
            
            <div>
              <h3>Thaizze Utida</h3>
              <span>@thaizze</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula.</p>
            </div>
          </section>
          <hr/>
          
          <section>
            <h2>Repositórios</h2>
            <Items title="Repositório 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
            <Items title="Repositório 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
            <Items title="Repositório 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
