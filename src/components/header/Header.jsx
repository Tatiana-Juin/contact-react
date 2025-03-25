import fstyle from './header.module.css'
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../button/Button"
export default function Header(){

    const iconMessage = <FaMessage />;
    const iconPhone = <FaPhoneAlt />;

    return(
        <>
            <div className={fstyle.header}>
                    <h1>CONTACTER <span> NOUS </span></h1>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus repudiandae illum? Rerum, ea at. Pariatur iure nemo, non laboriosam nihil architecto iusto sapiente ipsum incidunt neque earum corrupti eos, veniam ducimus aperiam optio veritatis! Deleniti similique nemo vero debitis doloremque tempore cum vitae, veniam ipsum, doloribus quis ipsam, error architecto excepturi omnis iusto earum nulla tenetur odit. Possimus, nostrum.</p>
                    <div>
                        <Button icon={iconMessage} text="VIA LE CHAT" />
                        <Button icon={iconPhone} text="PAR TELEPHONE" />
                    </div>
                    
            </div>
            
            {/* <Button icon={iconMessage} text="VIA LE CHAT" />
            <Button icon={iconPhone} text="PAR TELEPHONE" /> */}
         
        </>
    )
}