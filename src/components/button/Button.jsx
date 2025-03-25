import fstyle from './button.module.css'

export default function Button({icon,text} ){

     return(
        <>
           <div className= {fstyle.bouton} >

                <button > {icon} {text} </button>

           </div>

        </>
     )
}