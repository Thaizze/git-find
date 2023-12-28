import { useState } from "react";
import { Header } from "../../components/Header";
import Items from "../../components/Items";
import background from "../../assets/background.png";
import './styles.css';

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)
  const [currentRepos, setCurrentRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    console.log(newUser)
    if(newUser.name){
      const{avatar_url, name, bio} = newUser
      setCurrentUser({avatar_url, name, bio})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()
      
      if(newRepos.length){
        setRepos(newRepos)
      }
    }  
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} alt="Background Git Hub" className="background"/>
        <div className="info">
          <section>
            <input value={user} onChange={event => setUser(event.target.value)} placeholder="@username" />
            <button onClick={handleGetData} className="search">Buscar</button>
          </section>

          {currentUser?.name ? (
            <>
              <section className="profile">
                <div>
                  <img src="" alt="Foto de perfil" />
                </div>
                
                <div>
                  <h3>{currentUser}</h3>
                  <span>@thaizze</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula.</p>
                </div>
              </section>
              <hr/>
            </>
          ) : null}
          
          {repos?.length ? (
            <section>
              <h2>Repositórios</h2>
              <Items title="Repositório 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
              <Items title="Repositório 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
              <Items title="Repositório 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis aliquet lectus ac commodo. Etiam eu pharetra urna, pulvinar finibus tortor. Proin non tincidunt mi, blandit vehicula ipsum. Aliquam pellentesque et augue eget euismod. Quisque convallis aliquet est, in rutrum ante sollicitudin vel. Etiam rutrum, nisl eget egestas vehicula, lorem erat feugiat leo, quis ullamcorper nibh neque a libero. Donec malesuada sit amet leo vitae tristique. Suspendisse sed aliquet dolor. Nunc fermentum ut massa ac aliquet. Aenean vitae volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mollis neque. Sed hendrerit semper ligula id pulvinar. Pellentesque id ante mollis, molestie sapien nec, mattis lacus." />
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
