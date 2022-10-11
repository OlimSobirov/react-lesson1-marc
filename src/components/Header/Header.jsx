



import './Header.scss'
import logo from '../../asetss/svg/logo.svg'

function Header(){

    return(
    
       <main className='navigator'> 
        <div className='logo'>
            
            <img src={logo} alt="" />
        </div>
        <ul className='nav'>
       <li> <a href="">00 Home</a>  </li>
       <li> <a href="">01 Destination</a> </li>
       <li> <a href="">02 Crew</a> </li>
       <li> <a href="">03 Technology</a> </li>
   </ul>
   </main>
       
    )
}

export default Header
