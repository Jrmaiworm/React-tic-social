import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';

import NotificationsIcon from '@mui/icons-material/Notifications';

import "./home.scss"

function Home() {
    return (


        <>
            <div className="bg">
                <div className="home-container">

                    <div className="base-card home-card">

                        <form className="loginForm">

                            <LogImage />

                           

                            <div className="title">
                                <h1>Bem vindo a Tic Social.</h1>
                            </div>

                          

                            <Link to={"/AcessarCadastro"}>
                                <Button
                                    className="btnCadastro"
                                    type="submit">Fazer Cadastro
                                </Button>
                            </Link>


                            <Link className="btnVoltar" to={"/"}>
                                <h3 style={{color:"black"}}>Voltar</h3>
                            </Link>

                            <Link className="notification" to={"/cadastro"}>
                                <NotificationsIcon />
                            </Link>

                        </form>

                    </div>
                    {/* <Footer className="footer"/> */}
                </div>
            </div>




            {/* <Link to="/home">
               <PrimaryButton message="Link to Home" />
           </Link>
          

       <Link to="/home/products">
       <PrimaryButton message="Link to Products" />
       </Link> */}



        </>
    )
}

export default Home;