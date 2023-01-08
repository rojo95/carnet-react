import React from 'react';
// import logo from '../../assets/logo.svg';
import './App.css';
import carnet from '../../assets/img/carnet.jpg';

// import { Rnd } from 'react-rnd';
import Carnet from '../../components/carnet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: carnet,
      factory: 'OVNISOLUTIONS',
      name: '',
      nameColor: true,
      nameBold: false,
      cargo: 'Gerente General',
      cargoColor: true,
      cargoBold: false,
      labelId: '',
      id: '',
      fecha: false,
      fechaLigth: true,
      fechaBold: true,
      img: '',
      done: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const ci = new Intl.NumberFormat('es-VE').format(Math.floor((Math.random() * (90000000 - 5000000 + 1)) + 5000000));
    return await fetch('https://randomuser.me/api/', {method: 'GET'})
    .then(result=>result.json())
    .then(data=>{
      console.log(data.results[0]);
      this.setState({
        name: data.results[0].name.first+' '+data.results[0].name.last,
        id: data.results[0].id.value === (''||null) ? ci : data.results[0].id.value,
        labelId: data.results[0].id.name === '' ? 'C.I' : data.results[0].id.name,
        img: data.results[0].picture.large
      })
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
  
        <h1 className="text-3xl font-bold">
          Carnetización
        </h1>
  
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-1 pt-10'>

          <div className='container mx-auto max-w-md'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <div className='inline-flex'>
                  <input 
                    className="shadow appearance-none border rounded/l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Nombre Completo"
                    value={this.state.name} 
                    onChange={(e)=>this.setState({name:e.target.value})}
                  />
                  <button 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={(e)=>this.setState({nameColor: !this.state.nameColor})}
                  >
                    {this.state.nameColor ? 'Oscurecer' : 'Aclarar'}
                  </button>
                  <button 
                    className={`bg-blue-400 hover:bg-blue-300 text-gray-800 ${!this.state.nameBold ? 'font-bold' : ''} py-2 px-4 rounded-r`}
                    onClick={(e)=>this.setState({nameBold: !this.state.nameBold})}
                  >
                    {this.state.nameBold ? 'Normal' : 'Bold'}
                  </button>
                </div>
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cargo">
                  Cargo
                </label>
                <div className='inline-flex'>
                  <input 
                    className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="cargo" 
                    name="cargo" 
                    type="text" 
                    placeholder="Cargo"
                    value={this.state.cargo} 
                    onChange={(e)=>this.setState({cargo:e.target.value})}
                  />
                  <button 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={(e)=>this.setState({nameColor: !this.state.nameColor})}
                  >
                    {this.state.nameColor ? 'Oscurecer' : 'Aclarar'}
                  </button>
                  <button 
                    className={`bg-blue-400 hover:bg-blue-300 text-gray-800 ${!this.state.nameBold ? 'font-bold' : ''} py-2 px-4 rounded-r`}
                    onClick={(e)=>this.setState({nameBold: !this.state.nameBold})}
                  >
                    {this.state.nameBold ? 'Normal' : 'Bold'}
                  </button>
                </div>
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="labelId">
                  Descripción de Identificación
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="labelId" 
                  name="labelId" 
                  type="text" 
                  placeholder="Descripción de Identificación"
                  value={this.state.labelId} 
                  onChange={(e)=>this.setState({labelId:e.target.value})}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                  Descripción de Identificación
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="id" 
                  name="id" 
                  type="text" 
                  placeholder="Número de Identificación"
                  value={this.state.id} 
                  onChange={(e)=>this.setState({id:e.target.value})}
                />
              </div>
  
              <div className="md:flex md:items-center mb-6">
                <div className='inline-flex'>
                  <button 
                    className={`shadow ${!this.state.fecha ? 'bg-purple-500 hover:bg-purple-400' : 'bg-gray-400 hover:bg-gray-300'}  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-l`}
                    type="button"
                    onClick={(e)=>this.setState({fecha:!this.state.fecha})}
                  >
                    {this.state.fecha ? 'Activar' : 'Desactivar'} Fecha
                  </button>
                  <button 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={(e)=>this.setState({fechaLigth: !this.state.fechaLigth})}
                  >
                    {this.state.fechaLigth ? 'Oscurecer' : 'Aclarar'}
                  </button>
                  <button 
                    className={`bg-blue-400 hover:bg-blue-300 text-gray-800 ${!this.state.fechaBold ? 'font-bold' : ''} py-2 px-4 rounded-r`}
                    onClick={(e)=>this.setState({fechaBold: !this.state.fechaBold})}
                  >
                    {this.state.fechaBold ? 'Normal' : 'Bold'}
                  </button>
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Imprimir
                </button>
              </div>
            </div>
          </div> 

          <div>
            <Carnet info={this.state}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
