import fstyle from './navigation.module.css'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Navigation(){

    // TABLEAU QUI REGROUPE LES LIENS 
    const liens = [
        'Home',
        'A propos',
        'Contact'
    ]
    return(
        <>
            
            <div className={fstyle.navigation}>

                {/* pour la barre de navigation */}
                <div className={fstyle.icon}>
                    {/* ICON  */}
                    <IoChatbubbleEllipsesSharp size={30} style={{color:"purple"}}/>
                </div>
                {/* pour le lien */}
                <div className={fstyle.liens}>
                    <ul>
                        {liens.map(el => <li key={el}> {el} </li>)}
                    </ul>
                </div>
            </div>

        </>
    )
}