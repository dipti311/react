import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Navbar=() =>{
    return(
        <div className="navbar">
           <div className="wrapper">
            <div className="search">
                <input type="text"placeholder="Search.." />
                <SearchIcon className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                <LanguageOutlinedIcon className="icon"/>
                English
                </div>
                <div className="item">
                <DarkModeOutlinedIcon className="icon"/>
                </div>
                <div className="item">
             <img 
             src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" 
             alt="" 
             className="avatar"/>
                </div>
            </div>
           </div>
        </div>
    );
};
export default Navbar;