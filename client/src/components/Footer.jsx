import React from 'react';
import '../css/footer.css'


export default function Footer() {
    return (
        <>
        <footer>
            <nav>
                <ul className="footer-nav">
                    <li><a href="https://github.com/KarenDouglas" target='_blank'><img src="./assets/githubIcon.png" alt="github icon and link" /></a></li>
                    <li><a href="https://twitter.com/CodeNoob4Life" target='_blank'><img src="./assets/XIcon.png" alt="X icon and link" /></a></li>
                    <li><a href="https://www.linkedin.com/in/karen-douglas-344974246/" target='_blank'><img src="./assets/linkedIn_icon.png" alt="linkedin icon and link" /></a></li>
                </ul>
            </nav>
        </footer>
        
        </>
    )
}