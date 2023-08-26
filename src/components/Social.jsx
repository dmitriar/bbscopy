

import { Link, useLocation } from "react-router-dom";

export function Social() {
    const location = useLocation();

    switch (location.pathname) {
        case "/":
        case "/about_us":
        case "/vocation":
            return (
                <div className="header-top__social-box">
                    <a target="_blank" href="https://www.instagram.com/bbs.yourlocalpartner/"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100094040896636"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
                    <a target="_blank" href="#"><img className="social-images" src="./images/wh.svg" alt=""/></a>
                </div>
            );
        case "/coffee":
            return (
                <div className="header-top__social-box">
                    <a target="_blank" href="https://www.instagram.com/bbs.yourlocalpartner/"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100094040896636"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
                </div>
            );
        case "/laser":
            return (
                <div className="header-top__social-box">
                    <a target="_blank" href="https://www.instagram.com/lazer.georgia/"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
                    <a target="_blank" href="https://www.facebook.com/Lazer.georgia/"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
                </div>
            );
        case "/chemical":
            return (
                <div className="header-top__social-box">
                    <a target="_blank" href="https://www.instagram.com/grassbatumi/"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
                    <a target="_blank" href="https://www.facebook.com/GrassBatumi/"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
                </div>
            );
        case "/confectionary":
            return (
                <div className="header-top__social-box">
                    <a target="_blank" href="https://www.instagram.com/konditer.ge/"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
                    <a target="_blank" href="https://www.facebook.com/konditer.ge/"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
                </div>
            );
    };
}


// export function Social() {
//     return (
//         <div className="header-top__social-box">
//             <a href="#"><img className="social-images" src="./images/instagram.svg" alt=""/></a>
//             <a href="#"><img className="social-images" src="./images/facebook.svg" alt=""/></a>
//             <a href="#"><img className="social-images" src="./images/wh.svg" alt=""/></a>
//         </div>
//     )
// }