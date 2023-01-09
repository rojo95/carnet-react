import React from "react";
import { Rnd } from "react-rnd";
import './carnet.css'

class Carnet extends React.Component {
    render() {
        const d = new Date;
        const bold = 'font-bold';
        const sizes = [
            'text-2xl',
            'text-xl',
            'text-base',
            'text-sm',
            'text-xs',
        ]
        return (
            <div className="carnet shadow-md">
                <Rnd
                    default={{
                        x: 0,
                        y: 0,
                    }}
                    bounds='parent'
                    >
                    <img src={this.props.info.background} width={311.811} height={481.888} />
                </Rnd>
                <Rnd 
                    default={{
                        x: 55,
                        y: 20,
                    }}
                    bounds='parent'
                    dragGrid={[20,20]}
                    enableResizing={false}
                >
                    <p className={`factory ${this.props.info.factoryColor ? '' : 'text-white'} ${this.props.info.factoryBold ? bold : ''} ${sizes[this.props.info.factorySize]}`}>
                        {this.props.info.factory}
                    </p>
                </Rnd>
                <Rnd 
                    default={{
                        x: 90,
                        y: 80,
                    }}
                    dragGrid={[20,20]}
                    bounds='parent'
                    >
                    <img src={this.props.info.img} className='img'/>
                </Rnd>
                <Rnd 
                    default={{
                        x: 40,
                        y: 250,
                    }}
                    bounds='parent'
                    dragGrid={[20,20]}
                    enableResizing={false}
                >
                    <div className={`nombre ${this.props.info.nameColor ? '' : 'text-white'} ${this.props.info.nameBold ? bold : ''} ${sizes[this.props.info.nameSize]}`}>
                        {this.props.info.name}
                    </div>
                </Rnd>
                <Rnd 
                    default={{
                        x: 40,
                        y: 270,
                    }}
                    bounds='parent'
                    dragGrid={[20,20]}
                    enableResizing={false}
                >
                    <div className={`cargo ${this.props.info.cargoColor ? '' : 'text-white'} ${this.props.info.cargoBold ? bold : ''} ${sizes[this.props.info.cargoSize]}`}>
                        {this.props.info.cargo}
                    </div>
                </Rnd>
                <Rnd 
                    default={{
                        x: 40,
                        y: 290,
                    }}
                    bounds='parent'
                    dragGrid={[20,20]}
                    enableResizing={false}
                >
                    <div className={`id ${this.props.info.idColor ? '' : 'text-white'} ${this.props.info.idBold ? bold : ''} ${sizes[this.props.info.idSize]}`}>
                        {`${this.props.info.labelId}: ${this.props.info.id}`}
                    </div>
                </Rnd>
                <Rnd 
                    default={{
                        x: 95,
                        y: 390,
                    }}
                    bounds='parent'
                    dragGrid={[20,20]}
                    enableResizing={false}
                >
                    <div className={`${this.props.info.fecha ? 'hidden' : ''} ${this.props.info.fechaBold ? bold : ''} ${this.props.info.fechaLigth ? 'text-white' : ''}`}>
                        {`Vence: ${d.getDay()+1}/${d.getMonth()+1}/${d.getFullYear()+1}`}
                    </div>
                </Rnd>
            </div>
        );

    }
}

export default Carnet;