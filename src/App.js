import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';

function App() {
  console.log(dadosIniciais);    
  
  return (
    <div>
      <Menu />   
      <BannerMain url={dadosIniciais.categorias[0].videos[0].url}/>         
      <Footer/>
    </div>
  );
}

export default App;
