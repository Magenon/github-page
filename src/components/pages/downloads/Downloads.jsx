import * as React from "react";
import { FaDownload, FaCloudDownloadAlt, FaFileArchive } from 'react-icons/fa';
import { Par, NavbarLink, ContainerDown } from "../../SplashScreen.js";

function Downloads() {
    return (
        <div className="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Downloads</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* // <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://sennda.com.br">Home</a> / 
                                <span class="current">categoria "Blog"</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <Par>
                <div className="">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link" aria-current="page" href="https://get.teamviewer.com/j97mcep" target="blank">
                                TeamViewer &nbsp; <FaDownload /> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.sennda.com.br/download/SetupPrize.exe" target="blank">
                                Sennda Prize &nbsp; <FaDownload /> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.sennda.com.br/download/SetupNFE.exe" target="blank">
                                Sennda NFe &nbsp;<FaDownload /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.sennda.com.br/download/setupcontador.exe" target="blank">
                                Módulo do Contador – Download de XML’s &nbsp;&nbsp;<FaCloudDownloadAlt /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" a href="https://www.sennda.com.br/download/SetupNFE.zip" target="blank">
                                Sennda NFe comprimido (zip) Versão 3.10 &nbsp;&nbsp;<FaFileArchive /></a>
                        </li>
                    </ul>
                </div>
            </Par>
            {/* <NavbarLink class="nav-link" to="www.google.com" target="">
                    Teamviewer &nbsp; <FaDownload />

                </NavbarLink>                           */}


        </div>
    )
};

export default Downloads;