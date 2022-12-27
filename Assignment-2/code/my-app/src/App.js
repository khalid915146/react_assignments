// import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;
  // const { name, location, bloodGroup, age, profileImg } = props.employee
  console.log(employee)
  return (
    <div >
      {/* Start your React code here */}
      {employee.map(emp => {
        return (
          <div className="container">
            <div className='Img'>
              <img src={emp.profileImg} alt='img' />
            </div>
            <h1>{emp.name}</h1>
            <p>Location</p>
            <h2>{emp.location}</h2>
            <p>Blood group</p>
            <h2>{emp.bloodGroup}</h2>
            <p>Age</p>
            <h2>{emp.age}</h2>

          </div>
        )
      })}
    </div>)}
export default App;
