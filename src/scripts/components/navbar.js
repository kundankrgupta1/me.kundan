function navbar() {
    return `
        <div class="mainChild">
            <div class="logo">
                <a href="./index.html"><img src="./img/lg2.png" alt="Self_image"></a>
            </div>
            <div class="headerMenu">
                <ul>
                    <li><a href="./index.html">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skillsPage">skills</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="./docs/kkgresume.pdf" class="button" download="kkgresume" target="_blank">resume</a></li>
                </ul>
            </div>
        </div>`;
}

export default navbar;
