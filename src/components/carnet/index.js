import React from "react";
import { Rnd } from "react-rnd";
import Watermark from "@uiw/react-watermark";
import QRCode from "react-qr-code";
import "./carnet.css";

class Carnet extends React.Component {
  render() {
    const d = new Date();
    const bold = "font-bold";
    const sizes = ["text-2xl", "text-xl", "text-base", "text-sm", "text-xs"];
    return (
      <Watermark
        content="Demo por Johan Román"
        style={{ background: "#fff", width: "311.811px" }}
      >
        <div className="carnet shadow-md">
          <Rnd
            default={{
              x: 0,
              y: 0,
            }}
            bounds="parent"
          >
            <img
              src={this.props.info.background}
              width={311.811}
              height={481.888}
              className="img"
            />
          </Rnd>
          <Rnd
            default={{
              x: 20,
              y: 30,
            }}
            bounds="parent"
            dragGrid={[20, 20]}
            enableResizing={false}
          >
            <p
              className={`factory ${
                this.props.info.factoryColor ? "" : "text-white"
              } ${this.props.info.factoryBold ? bold : ""} ${
                sizes[this.props.info.factorySize]
              }`}
            >
              {this.props.info.factory}
            </p>
          </Rnd>
          <Rnd
            default={{
              x: 20,
              y: 100,
            }}
            dragGrid={[20, 20]}
            bounds="parent"
          >
            <img src={this.props.info.img} className="img" />
          </Rnd>
          <Rnd
            default={{
              x: 165,
              y: 100,
            }}
            dragGrid={[20, 20]}
            enableResizing={false}
            bounds="parent"
          >
            <QRCode
              className={!this.props.info.showQr ? "hidden" : ""}
              bgColor={`#${this.props.info.qrLigth ? "fff" : "000"}`}
              fgColor={`#${this.props.info.qrLigth ? "000" : "fff"}`}
              value={`DEMO -- ${this.props.info.qr} -- DEMO`}
              size={128}
            />
          </Rnd>
          <Rnd
            default={{
              x: 100,
              y: 250,
            }}
            bounds="parent"
            dragGrid={[20, 20]}
            enableResizing={false}
          >
            <div
              className={`nombre ${
                this.props.info.nameColor ? "" : "text-white"
              } ${this.props.info.nameBold ? bold : ""} ${
                sizes[this.props.info.nameSize]
              }`}
            >
              {this.props.info.name}
            </div>
          </Rnd>
          <Rnd
            default={{
              x: 100,
              y: 270,
            }}
            bounds="parent"
            dragGrid={[20, 20]}
            enableResizing={false}
          >
            <div
              className={`cargo ${
                this.props.info.cargoColor ? "" : "text-white"
              } ${this.props.info.cargoBold ? bold : ""} ${
                sizes[this.props.info.cargoSize]
              }`}
            >
              {this.props.info.cargo}
            </div>
          </Rnd>
          <Rnd
            default={{
              x: 100,
              y: 290,
            }}
            bounds="parent"
            dragGrid={[20, 20]}
            enableResizing={false}
          >
            <div
              className={`id ${this.props.info.idColor ? "" : "text-white"} ${
                this.props.info.idBold ? bold : ""
              } ${sizes[this.props.info.idSize]}`}
            >
              {`${this.props.info.labelId}: ${this.props.info.id}`}
            </div>
          </Rnd>
          <Rnd
            default={{
              x: 0,
              y: 430,
              width: this.props.info.fechaCenter ? "100%" : "auto",
            }}
            className="w-full"
            bounds="parent"
            dragGrid={[20, 20]}
            enableResizing={false}
          >
            <div
              className={`${this.props.info.fecha ? "hidden" : ""} ${
                this.props.info.fechaBold ? bold : ""
              } ${this.props.info.fechaLigth ? "text-white" : ""} `}
            >
              {`Vence: ${d.getDay() + 1}/${d.getMonth() + 1}/${
                d.getFullYear() + 1
              }`}
            </div>
          </Rnd>
        </div>
      </Watermark>
    );
  }
}

export default Carnet;
