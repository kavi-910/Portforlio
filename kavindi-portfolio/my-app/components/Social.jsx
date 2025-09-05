import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path:'https://github.com/kavi-910'},
    {icon: <FaLinkedinIn />, path:'https://www.linkedin.com/in/kavindi-rangana-968783293/'},
    {icon: <FaYoutube />, path:'https://www.youtube.com/@KavindiRangana'},
    {icon: <FaTwitter />, path:''},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    );
};

export default Social;