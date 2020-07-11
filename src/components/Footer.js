import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <p>© 2020 <a href="https://www.robinnong.com/">Robin Nong</a>. Photos provided by <a href="https://www.pexels.com">Pexels.</a> Featured photo by <a href={props.link}>{props.photographer}</a>.</p>
        </footer>
    )
}

export default Footer;