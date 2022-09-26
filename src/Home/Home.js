import './style.css'

function Home(){
    return(
        <div>        
        <img src={require('../avt.jpg')} alt='Avatar'/>
        <div className="description">
        <h2>Giao Phuong Nam</h2>
        <i>Front-end developer</i><br/>
        <i>FB: <a href="https://www.facebook.com/namgp.gina/" target="_blank" rel="noreferrer"> Giao nam</a></i><br/>
        <i>Email: contactgiaonam@gmail.com</i>
        </div>
        </div>
      
    )
}

export default Home