import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import cardb from './img/card-band.png'
import { useParams } from 'react-router-dom';

function Bandas() {
    return (
        <>
            <div class="breadcrumb">
                <div class="col-12 breadcrumb-conteudo container">
                    <h1>Resultados</h1>
                </div>
            </div>
            <div class="div-servicos">
                <div class="container">
                    <div class="col-12 row">
                        <div class="col-12 text-center titulo-servicos">
                            <h2>Itens encontrados</h2>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Linkin Park</h5>
                                    <p class="card-text">Somos uma banda de rock dos Estados Unidos formada em Agoura Hills, Califórnia. Buscamos qualquer local para fazer show</p>
                                    <a href="https://www.linkinpark.com/meteora20" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Halestorm</h5>
                                    <p class="card-text"> Somos uma banda americana de hard rock formada em 1997, na cidade de York, Pensilvânia, pelos irmãos Lzzy Hale e Arejay Hale.</p>
                                    <a href="https://www.halestormrocks.com" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">The pretty reckless</h5>
                                    <p class="card-text"> Somos uma banda americana de metal alternativo, formada em Nova Iorque, no ano de 2009.</p>
                                    <a href="https://theprettyreckless.com" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Bandas;