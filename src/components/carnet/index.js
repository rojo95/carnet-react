import { Rnd } from "react-rnd";
import './carnet.css'

export default function Carnet({info}) {
    const d = new Date;
    return (
        <div className="carnet shadow-md">
            <Rnd
                default={{
                    x: 0,
                    y: 0,
                }}
                >
                <img src={info.background} width={311.811} height={481.888} />
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
                <p className={`nombre ${info.nameColor ? '' : 'text-white'} ${info.nameBold ? 'font-bold' : ''} text-2xl font-bold`}>
                    {info.factory}
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
                <img src={info.img} className='img'/>
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
                <div className={`nombre ${info.nameColor ? '' : 'text-white'} ${info.nameBold ? 'font-bold' : ''}`}>
                    {info.name}
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
                <div className="cargo">
                    {info.cargo}
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
                <div className="id">
                    {`${info.labelId}: ${info.id}`}
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
                <div className={`${info.fecha ? 'hidden' : ''} ${info.fechaBold ? 'font-bold' : ''} ${info.fechaLigth ? 'text-white' : ''}`}>
                    {`Vence: ${d.getDay()+1}/${d.getMonth()+1}/${d.getFullYear()+1}`}
                </div>
            </Rnd>
        </div>
    );
}