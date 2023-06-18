import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import carde from './img/card-band.png'
import { useParams } from 'react-router-dom';

function Estabelecimento() {

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
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Rock in Rio</h5>
                                    <p class="card-text">É um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985</p>
                                    <a href="https://rockinrio.com/rio/pt-br/home/" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Lollapalooza</h5>
                                    <p class="card-text">É um festival de música alternativa que acontece anualmente, é composto por gêneros como rock alternativo, heavy metal, punk rock, grunge e performances de comédia e danças</p>
                                    <a href="https://www.lollapaloozabr.com" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Alinea</h5>
                                    <p class="card-text">Alinea é um restaurante em Chicago, Illinois, Estados Unidos. Em 2010, Alinea foi premiada com três estrelas pelo Guia Michelin</p>
                                    <a href="https://www.alinearestaurant.com" target="_blank" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Estabelecimento;