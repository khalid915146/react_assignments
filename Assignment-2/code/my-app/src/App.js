import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
  const{name,location,bloodGroup,age,profileImg}=props.employee
return(
  <div className="container">
  {/* Start your React code here */}
  <div className='Img'>
    <img src={profileImg}/> 
  </div>
  <h1>{name}</h1>
  <p>Location</p>
  <h2>{location}</h2>
  <p>Blood group</p>
  <h2>{bloodGroup}</h2>
  <p>Age</p>
  <h2>{age}</h2>
</div>
)
}



export default App;
