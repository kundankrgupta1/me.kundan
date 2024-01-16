import navbar from "./components/navbar.js";

let navbarElement = document.getElementById("navbar");

let aboutTabElement = document.getElementById("about");

let skillsTabElement = document.getElementById("skillsPage");

let projectsTabElement = document.getElementById("projects");

function displayNavbar() {
    navbarElement.innerHTML = navbar();
}

function aboutTabDisplay() {
    aboutTabElement.innerHTML = `
        <div class="aboutClass">
            <div class="one">
                <div class="photo">
                    <img src="./img/me.jpg" alt="">
                </div>
                <div class="selfSummary">
                    <p class="subTitle">know everything here</p>
                    <div class="selfSummaryText">
                        <img src="./img/star.png" alt="">
                        <h1>SELF-SUMMARY</h1>
                        <img src="./img/star.png" alt="">
                    </div>
                    <div class="aboutMe">
                        <img src="./img/icon2-2.png" alt="">
                        <h2><span>kundan</span>kr.Gupta</h2>
                        <h4 class="professionText"><span>Aspiring Full Stack Developer</span></h4>
                        <p>Enthusiastic and technically adept front-end developer with a robust foundation in HTML, CSS, and JavaScript. Demonstrated commitment to coding excellence.</p>
                    </div>
                </div>
            </div>
            
            <div class="two">
                <div class="EducationBox">
                    <p class="blue">EDUCATION</p>
                    <div class="educationText">
                        <p>2015-2016</p>
                        <h3>Advance Diploma in Computer Appilication</h3>
                        <p>Chitransh Computer Institute, Gopalganj</p>
                    </div>
                    <div class="educationText">
                        <p>2018-2023</p>
                        <h3>Bacheloar of Arts</h3>
                        <p>Indira Gandhi National Open University</p>
                    </div>
                    <div class="educationText">
                        <p>2023-persent</p>
                        <h3>Career Accelerator Program</h3>
                        <h4>Full-stack Web Developer</h4>
                        <p>Masai School, Banglore.</p>
                    </div>
                </div>
                <div class="experienceBox">
                    <p class="blue">EXPERIENCE</p>
                    <div class="experienceText">
                        <p>2016-2021</p>
                        <h3>New Touch Technology</h3>
                        <p>General Manager</p>
                    </div>
                    <div class="experienceText">
                        <p></p>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div>

            <div class="three">
                <div class="contact">
                    <div class="sM2">
                        <a href="https://github.com/kundankrgupta1" target="_blank"><img src="./img/git.png" alt="Github"></a>
                        <a href="https://www.linkedin.com/in/kundankrgupta1/" target="_blank"><img src="./img/li.png" alt="Linkedin"></a>
                        <a href="mailto: kundanprogrammerz@gmail.com"><img src="./img/icons8-email-96.png" alt="Email"></a>
                    </div>
                    <div class="textContact">
                        <div class="position">
                            <a href="#contact" style="color: black;">
                                <p>STAY WITH ME</p>
                                <h3>Contact me.</h3>
                            </a>
                        </div>
                        <div class="mail">
                            <img src="./img/icon-2.svg" alt="">
                        </div>
                    </div>  
                </div>

                <div class="contactMiddle">
                    <img src="./img/icon2-2.png" alt="">
                    <a href="#contact"><h1><span>Let's</span></h1>
                    <h1 style="color: black;">Work together.</h1></a>
                </div>

                <div class="contact">
                    <div class="sM2">
                        <a href="https://github.com/kundankrgupta1" target="_blank"><img src="./img/git.png" alt="Github"></a>
                        <a href="https://www.linkedin.com/in/kundankrgupta1/" target="_blank"><img src="./img/li.png" alt="Linkedin"></a>
                        <a href="mailto: kundanprogrammerz@gmail.com"><img src="./img/icons8-email-96.png" alt="Email"></a>
                    </div>
                    <div class="textContact">
                        <div class="position">
                            <a href="#contact" style="color: black;">
                                <p>STAY WITH ME</p>
                                <h3>Contact me.</h3>
                            </a>
                        </div>
                        <div class="mail">
                            <img src="./img/icon-2.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}


function skillsTabDisplay() {
    skillsTabElement.innerHTML = `
        <p class="subTitle extra">top skills that's matter</p>
        <div class="skillsHeader">
            <img src="./img/icon-2.svg" alt="">
            <h1>Skills</h1>
        </div>
        <div class="skillsTab">
            <div class="icons">
                <img src="./img/icons8-java-240.png" alt="">
                <hr>
                <h3>Java</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-python-480.png" alt="">
                <hr>
                <h3>Python</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-javascript-480.png" alt="">
                <hr>
                <h3>JavaScript</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-node-js-240.png" alt="">
                <hr>
                <h3>node.js</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-react-native-512.png" alt="">
                <hr>
                <h3>React</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-html-480.png" alt="">
                <hr>
                <h3>HTML</h3>
            </div>
            <div class="icons">
                <img src="./img/icons8-css-480.png" alt="">
                <hr>
                <h3>CSS3</h3>
            </div>
            <div class="icons">
                <img src="./img/json.png" alt="">
                <hr>
                <h3>JSON</h3>
            </div>
        </div>`;    
}

function projectsTabDisplay() {
    projectsTabElement.innerHTML = `
        <p class="subTitle extra">projects done till now</p>
        <div class="skillsHeader">
            <img src="./img/icon-2.svg" alt="">
            <h1>my projects</h1>
        </div>
        <div class="projectsDiv">

            <div class="items">
                <img src="./img/hotjar.png" alt="">
                <div class="jrb4">
                    <div class="techstack">
                        <img src="./img/icons8-html-480.png" alt="">
                        <img src="./img/icons8-css-480.png" alt="">
                    </div>
                    <p>2 months ago.</p>
                </div>
                <p>
                    Hotjar: Website Heatmaps &amp; Behavior Analytics Tools
                    <p class="bulletPoint">
                        Developed a Hotjar.com clone with HTML and CSS3
                        Implemented an accordion feature, Developed the project individually within a tight deadline of 5 days
                    </p>
                </p>

                <div class="buttonArea">
                    <a href="https://github.com/kundankrgupta1/hotjar.com" target="_blank"><button class="button"><img src="./img/git.png" alt="">&nbsp;Github</button></a>
                    <a href="https://kundankrgupta1.github.io/hotjar.com/" target="_blank"><button class="button"><img src="./img/link.png" alt="">&nbsp;Visit site</button></a>
                </div>
            </div>

            <div class="items">
                <img src="./img/ntt.png" alt="">
                <div class="jrb4">
                    <div class="techstack">
                        <img src="./img/icons8-html-480.png" alt="">
                        <img src="./img/icons8-css-480.png" alt="">
                        <img src="./img/icons8-javascript-480.png" alt="JavaScript">
                    </div>
                    <p>1 months ago.</p>
                </div>
                <p>
                    New Touch Technology | Powder Coating Machine Manufacturer
                    <p class="bulletPoint">
                        Builed ntt website using HTML, CSS3 and JavaScript, company hire me to design and develope company website, Developed the project individually within a 2 days
                    </p>
                </p>

                <div class="buttonArea">
                    <a href="https://github.com/kundankrgupta1/newtouchtechnology" target="_blank"><button class="button"><img src="./img/git.png" alt="">&nbsp;Github</button></a>
                    <a href="https://nttpowdercoating.com" target="_blank"><button class="button"><img src="./img/link.png" alt="">&nbsp;Visit site</button></a>
                </div>
            </div>
        </div>
    `;
}

function init() {
    displayNavbar();
    aboutTabDisplay();
    skillsTabDisplay();
    projectsTabDisplay();
}

init();