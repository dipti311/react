import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
const Home=(props) =>{
    return(
        <div className="home">
           <Sidebar/>
           <div className="homeContainer">
           <Navbar/>
           <div className="widgets">
           <Widget userListLength={props.userData.length}type="user"/>
           {/* <Widget type="createuser"/> */}
           </div>
           <div className="charts">
            <Chart userData={props.userData}/>
           </div>
        </div>
        </div>
    );
};
export default Home