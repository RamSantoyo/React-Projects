import { Component } from "react"//sirve para que el estado se actualice y sea dinamico

class Boton extends Component {

  componentDidMount() {
    console.log('Se montó el componente')//se ejecuta cuando se monta el componente al ultimo
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Se actualizó el componente', prevProps, prevState)//se ejecuta cuando se actualiza el componente
  }

  componentWillUnmount() {
    console.log('Se desmontó el componente', this.props, this.state)//se ejecuta cuando se desmonta el componente
  }
  
  render() {
    return (
      <button className="Boton" onClick={this.props.onClick}>{this.props.texto}</button>
    )
  }
}

class Texto extends Component {
  render() {
    return (
      <h1 className={this.props.valor > 0 ? 'positivo' : 'negativo'}>Contador</h1>
    )
  }
}

class Input extends Component {
  render() {
    return (
      <input type="text" 
      placeholder={this.props.placeholder}
      value={this.props.value}
      onChange={this.props.onChange} />
    )
  }
}

class App extends Component {
  state= {
    valor: 0,
    nombre: '',
    apellido: ''
  }

  updateValues = (props, value) => {
    this.setState({ [props]: value })
  }

  incrementar = () => {
    this.setState({ valor: this.state.valor + 1 })
  }

  decrementar = () => {
    this.setState({ valor: this.state.valor - 1 })
  }

  render() {

    return (
      <div>
        {<Texto valor={this.state.valor} />}
        <p>Valor: {this.state.valor}</p>
        {this.state.valor !== 3 ? <Boton onClick={this.incrementar} texto="Incrementar" /> : null}
        <Boton onClick={this.decrementar} texto="Decrementar" />
        <Boton onClick={() => this.setState({ valor: 0 })} texto="Resetear" />

        <form>
          <h1>{this.state.nombre} {this.state.apellido}</h1>
          <Input 
          placeholder="Nombre" 
          value={this.state.nombre}
          onChange={(e) => this.updateValues('nombre', e.target.value)} />
          <Input 
          placeholder="Apellido" 
          value={this.state.apellido}
          onChange={(e) => this.updateValues('apellido', e.target.value)} />
        </form>
      </div>
    )
  }
}



export default App