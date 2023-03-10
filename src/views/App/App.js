import React from "react";
import './App.css';
import carnetImg from '../../assets/img/carnet.jpg';
import Navbar from '../../components/Navbar/';

import Carnet from '../../components/carnet';
import ReactToPrint from 'react-to-print';

const ref = React.createRef();
const empresas = [
  'OVNISOLUTIONS',
  'Microsoft',
  'Hewlett-Packard',
  'Volkswagen',
  'Toyota Motors',
  'Mercedes-Benz Group',
  'Apple',
  'Samsung',
  'Yamaha'
];
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      background: carnetImg,
      factory: '',
      factoryColor: true,
      factoryBold: true,
      factorySize: 0,
      name: '',
      nameColor: true,
      nameBold: false,
      nameSize: 2,
      cargo: 'Gerente General',
      cargoColor: true,
      cargoBold: false,
      cargoSize: 2,
      labelId: '',
      id: '',
      idColor: true,
      idBold: false,
      idSize: 2,
      fecha: false,
      fechaLigth: true,
      fechaBold: true,
      img: '',
      done: false
    };
  }

  componentDidMount() {
    this.getData();
    this.randomFactory();
  }

  randomNumber(max, min = 0) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  }

  randomFactory() {
    let factory = this.randomNumber(empresas.length-1);
    this.setState({factory:empresas[factory]})
  }
  
  async getData() {
    const ci = new Intl.NumberFormat('es-VE').format(this.randomNumber(5000000, 90000000));
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

  changeProfileP = (e) => {
    (e.target.files && e.target.files[0]) && this.setState({img: URL.createObjectURL(e.target.files[0])});
  }

  changeBackground = (e) => {
    (e.target.files && e.target.files[0]) && this.setState({background: URL.createObjectURL(e.target.files[0])});
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
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
  
        <div className='grid grid-cols-12 gap-4 py-10'>

          <div className='container mx-auto col-span-12 sm:col-span-12 md:col-span-8 px-3 md:px-10'>
            <div className="bg-white shadow-xl rounded px-10 pt-6 pb-8 mb-4">

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-12 md:col-span-6">

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile">
                      Foto de Perfil
                    </label>
                    <div className="inline-flex w-full">
                      <div className="shrink-0">
                        <img className="h-16 w-16 object-cover rounded-full" src={this.state.img} alt="Foto de perfil actual" />
                      </div>
                      <label className="block pt-4">
                        <span className="sr-only">Elegir Imagen de Perfil</span>
                        <input type="file" className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                          name="profile"
                          id="profile"
                          onChange={this.changeProfileP}/>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Nombre Completo
                    </label>
                    <div className='inline-flex w-full'>
                      <input 
                        className="shadow appearance-none border border-gray-400 rounded-tl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Nombre Completo"
                        value={this.state.name} 
                        onChange={(e)=>this.setState({name:e.target.value})}
                      />
                      <button 
                        className="bg-orange-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4"
                        onClick={(e)=>this.setState({nameColor: !this.state.nameColor})}
                      >
                        &nbsp;{!this.state.nameColor ? 'Oscurecer' : 'Aclarar'}&nbsp;
                      </button>
                      <button 
                        className={`bg-blue-400 hover:bg-blue-300 text-white ${!this.state.nameBold ? 'font-bold' : ''} py-2 px-4 rounded-tr`}
                        onClick={(e)=>this.setState({nameBold: !this.state.nameBold})}
                      >
                        {this.state.nameBold ? 'Normal' : 'Bold'}
                      </button>
                    </div>
                    <div>
                      <select 
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-b shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{this.setState({nameSize: e.target.value})}}
                        defaultValue={this.state.nameSize}
                      >
                        <option value={0}>Grande</option>
                        <option value={1}>Mediano</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Pequeño</option>
                        <option value={4}>Muy Pequeño</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="labelId">
                      Identificación
                    </label>
                    <input 
                      className="shadow appearance-none border border-gray-400 rounded-t w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="labelId" 
                      name="labelId" 
                      type="text" 
                      placeholder="Descripción de Identificación"
                      value={this.state.labelId} 
                      onChange={(e)=>this.setState({labelId:e.target.value})}
                    />

                    <div className='inline-flex w-full'>
                      <input 
                        className="shadow appearance-none border border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="id" 
                        name="id" 
                        type="text" 
                        placeholder="Número de Identificación"
                        value={this.state.id} 
                        onChange={(e)=>this.setState({id:e.target.value})}
                      />

                      <button 
                        className="bg-orange-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4"
                        onClick={(e)=>this.setState({idColor: !this.state.idColor})}
                      >
                        &nbsp;{!this.state.idColor ? 'Oscurecer' : 'Aclarar'}&nbsp;
                      </button>
                      <button 
                        className={`bg-blue-400 hover:bg-blue-300 text-white ${!this.state.idBold ? 'font-bold' : ''} py-2 px-4`}
                        onClick={(e)=>this.setState({idBold: !this.state.idBold})}
                      >
                        {this.state.idBold ? 'Normal' : 'Bold'}
                      </button>

                    </div>

                    <div>
                      <select 
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-b shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{this.setState({idSize: e.target.value})}}
                        defaultValue={this.state.idSize}
                      >
                        <option value={0}>Grande</option>
                        <option value={1}>Mediano</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Pequeño</option>
                        <option value={4}>Muy Pequeño</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cargo">
                      Cargo
                    </label>
                    <div className='inline-flex w-full'>
                      <input 
                        className="shadow appearance-none border border-gray-400 rounded-tl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="cargo" 
                        name="cargo" 
                        type="text" 
                        placeholder="Cargo"
                        value={this.state.cargo} 
                        onChange={(e)=>this.setState({cargo:e.target.value})}
                      />
                      <button 
                        className="bg-orange-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4"
                        onClick={(e)=>this.setState({cargoColor: !this.state.cargoColor})}
                      >
                        &nbsp;{!this.state.cargoColor ? 'Oscurecer' : 'Aclarar'}&nbsp;
                      </button>
                      <button 
                        className={`bg-blue-400 hover:bg-blue-300 text-white ${!this.state.cargoBold ? 'font-bold' : ''} py-2 px-4 rounded-tr`}
                        onClick={(e)=>this.setState({cargoBold: !this.state.cargoBold})}
                      >
                        {this.state.cargoBold ? 'Normal' : 'Bold'}
                      </button>
                    </div>

                    <div>
                      <select 
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-b shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{this.setState({cargoSize: e.target.value})}}
                        defaultValue={this.state.cargoSize}
                      >
                        <option value={0}>Grande</option>
                        <option value={1}>Mediano</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Pequeño</option>
                        <option value={4}>Muy Pequeño</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                                    
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-6">

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="background">
                      Immagen de Fondo
                    </label>
                    <div className="inline-flex w-full">
                      <div className="shrink-0">
                        <img className="h-16 w-11" src={this.state.background} alt="Foto de perfil actual" />
                      </div>
                      <label className="block pt-4">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                          id="background"
                          onChange={this.changeBackground}/>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="factory">
                      Empresa
                    </label>
                    <div className='inline-flex w-full'>
                      <input 
                        className="shadow appearance-none border border-gray-400 rounded-tl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="factory" 
                        name="factory" 
                        type="text" 
                        placeholder="Nombre Completo"
                        value={this.state.factory} 
                        onChange={(e)=>this.setState({factory:e.target.value})}
                      />
                      <button 
                        className="bg-orange-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4"
                        onClick={()=>this.setState({factoryColor: !this.state.factoryColor})}
                      >
                        {!this.state.factoryColor ? 'Oscurecer' : 'Aclarar'}
                      </button>
                      <button 
                        className={`bg-blue-400 hover:bg-blue-300 text-white ${!this.state.factoryBold ? 'font-bold' : ''} py-2 px-4 rounded-tr`}
                        onClick={()=>this.setState({factoryBold: !this.state.factoryBold})}
                      >
                        {this.state.factoryBold ? 'Normal' : 'Bold'}
                      </button>
                    </div>
                    <div>
                      <select 
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-b shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{this.setState({factorySize: e.target.value})}}
                        defaultValue={this.state.factorySize}
                      >
                        <option value={0} >Grande</option>
                        <option value={1}>Mediano</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Pequeño</option>
                        <option value={4}>Muy Pequeño</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
      
                  <div className="md:items-center mb-6 w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
                      Fecha
                    </label>
                    <div className='inline-flex w-full'>
                      <button 
                        className={`w-full text-sm shadow ${!this.state.fecha ? 'bg-purple-500 hover:bg-purple-400' : 'bg-gray-400 hover:bg-gray-300'}  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-l`}
                        type="button"
                        onClick={(e)=>this.setState({fecha:!this.state.fecha})}
                        name="fecha"
                        id="fecha"
                      >
                        {this.state.fecha ? 'Activar' : 'Desactivar'} Fecha
                      </button>
                      <button 
                        className="bg-orange-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4"
                        onClick={(e)=>this.setState({fechaLigth: !this.state.fechaLigth})}
                      >
                        &nbsp;{this.state.fechaLigth ? 'Oscurecer' : 'Aclarar'}&nbsp;
                      </button>
                      <button 
                        className={`bg-blue-400 hover:bg-blue-300 text-white ${!this.state.fechaBold ? 'font-bold' : ''} py-2 px-4 rounded-r`}
                        onClick={(e)=>this.setState({fechaBold: !this.state.fechaBold})}
                      >
                        {this.state.fechaBold ? 'Normal' : 'Bold'}
                      </button>
                    </div>
                  </div>

                  {/* <div className="mb-4">
                    <button 
                      className='w-full text-md shadow bg-orange-500 hover:bg-orange-400 active:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-l'
                      type="button"
                      // onClick={this.agregarImagen}
                    >
                      Agregar Imagen
                    </button>
                  
                  </div> */}
                  
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <ReactToPrint
                  trigger={() => {
                    return <button 
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                      type="button"
                      >
                      Imprimir
                    </button>;
                  }}
                  // pageStyle="@page { size : A5 ; margin: 0 0 0 0;}"
                  documentTitle={`Carnet de ${this.state.name}`}
                  content={() => this.ref}
                />
              </div>
            </div>
          </div> 

          <div className="my-auto col-span-12 sm:col-span-12 md:col-span-4 container mx-auto" style={{width: '311.811px', maxWidth: '311.811px', overflow: 'hidden'}}>
            <Carnet 
              info={this.state}
              ref={el => (this.ref = el)}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
