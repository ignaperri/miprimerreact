import React from 'react';

class Content extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0,
            personas: [],
            mensaje: ""
        }

    }

    //se ejecuta despues del render
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usuarios => {
                this.setState({ personas: usuarios });
                this.setState({ personaBuscadas: usuarios });
            })
    }

    handlerChange = (event) => {
        var v = event.target.value.toUpperCase();
        this.setState({mensaje: v});
    }

    render() {
        return (
            <section className="Content">
                <input type='text' onChange={this.handlerChange} />
                <div className="ListadoPersonas"> {
                    this.state.personas
                        .filter( (p)=> {
                            return p.name.toUpperCase().includes(this.state.mensaje);
                        })
                        .map((p) => {
                            return <div>
                                        <label> {(p.name)} </label>
                                    </div>
                        })
                }
                </div>
            </section>

        )
    }
}



export default Content;

