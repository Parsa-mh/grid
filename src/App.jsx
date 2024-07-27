import logo from "./assets/react.svg"
import { FaCog, FaCode, FaHouseUser } from "react-icons/fa"; 
import { FaLocationDot } from "react-icons/fa6";
import { BsMusicNoteBeamed,BsFillPersonFill,BsFillShieldLockFill,BsBell,BsDot} from "react-icons/bs";
import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <div className="box">
          <div className="i1">
            <div style={{ padding: 10 }}>
              <FaCode className="logo" />
            </div>
            <div>
              <ul className="sidebar-items">
                <li className="sidebar-item active"><FaHouseUser /></li>
                <hr />
                <li className="sidebar-item"><FaLocationDot /></li>
                <hr />
                <li className="sidebar-item"><BsMusicNoteBeamed /></li>
                <hr />
                <li className="sidebar-item"><BsFillPersonFill /></li>
                <hr />
                <li className="sidebar-item"><BsFillShieldLockFill /></li>
                <hr />
                <li className="sidebar-item"><BsBell /></li>
              </ul>
            </div>
            <div className="side-footer">
              <FaCog style={{cursor : "pointer"}} />
              <img src="https://placehold.co/400" className="profile-image" alt="" />
            </div>
          </div>
          <div className="i2">
            <div className="i2-top">
              <button className="live">live</button>
              <div className="buttons">
                <button className="button"><span></span> 24°C</button>
                <button className="button"><span></span>50%</button>
                <button className="button"><span></span> 350W</button>
                <button className="button"><span></span>80%</button>
              </div>
            </div>
          </div>
          <div className="i3"></div>
          <div className="i4">
            <div className="p1"></div>
            <div className="p2"></div>
          </div>
          <div className="i5"></div>
        </div>

      </div>
    </>
  )
}

export default App
