import React from "react";
import './Catalogo.css'
import oversize from '../../camisas/CamisaOversize1.png'
import basica from '../../camisas/CamisaBasica2.png'
import buzo from '../../camisas/Buzo.png'

export const Catalogo = () => {
    return (
        <div className="catalogo">
            <div>
                <img src={oversize} alt="" className="oversize"/>
                <div className="over__title">Oversize</div>
                <a href="#" className="over__link">Comprar</a>
            </div>

            <div>
                <img src={buzo} alt="" className="oversize"/>
                <div className="over__title">Buzo</div>
                <a href="#" className="over__link">Comprar</a>
            </div>

            <div>
                <img src={basica} alt="" className="oversize"/>
                <div className="over__title">Basica</div>
                <a href="#" className="over__link">Comprar</a>
            </div>

        </div>
    )
}