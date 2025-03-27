import Image from '../../assets/image/home.svg'
import fstyle from './formulaire.module.css'

import Button from '../button/Button'
export default function Formulaire(){

    return(
        <>
            <div className={fstyle.formulaire}>
                
                <h2>CONTACTER NOUS PAR MAIL</h2>
                
                {/* DIV REGROUPANT TOUS   */}

                <div>
                    {/* FORMULAIRE DE CONTACT */}
                            <form action="" method="post">
                                {/* nom */}
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" id="nom" />
                                
                                {/* prenom */}
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" name="prenom" id="prenom" />

                                {/* email*/}
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />

                                {/* Message */}
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>

                                <Button text="ENVOYER" />

                            </form>
                      

                     
                           <img src={Image} alt="Image d'une enveloppe " style={{width:"500px"}} />
                       

                </div>
                
            </div>
        </>
    )
}