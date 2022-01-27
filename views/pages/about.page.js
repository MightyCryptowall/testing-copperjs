import profile from "../../assets/images/profile.png";
import NavbarComponent from "../components/navbar.component";

const AboutPage = () => {
    return `
    <header>
        ${NavbarComponent()}
    </header>
    <div style="
        display:flex; 
        height: 70vh;
        flex-direction: column;
        backgroundColor: red; 
        justify-content: center; 
        align-items: center"
    >
     
        <img src="${profile}" alt="profile of yethiha" width="200em" />
        <h3>Hello! I am Ye Thiha.</h3>
        <p>This is a test project which is build with vanilla javascript.</p>
        
    </div>`
}

export default AboutPage;