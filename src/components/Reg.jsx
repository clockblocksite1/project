import "./Reg.css";
import logo10Img from "./img/logo 10.png"
function Reg() {
  return (
    <div className='reg'>
      <div className='rg'>Register your account now</div>
      <div className='rg2'>and start to trade</div>
      <form >
        <input
          type='text'
          placeholder='Example@gmail.com'
          style={{ paddingLeft: '48px' }}
          className='em'
          
        />
        <button type='submit' className='bog'>Sign in</button>
      </form>
      <img src={logo10Img} alt="" className="logo10"/>
    </div>
  );
}

export default Reg;