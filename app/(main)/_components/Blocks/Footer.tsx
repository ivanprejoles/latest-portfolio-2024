import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (  
        <>
            <hr />
            <div className="w-full p-10 flex flex-row justify-start">
                <div className="text-sm text-neutral-500">
                    <ul>
                        <li className=" mb-2">Portfolio by <a className="text-zinc-950 font-bold dark:text-sky-500" target="_blank" href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/">Ivan Prejoles</a></li>
                        <li>{"Here's my "}<a className="text-zinc-950 font-bold dark:text-sky-500" target="_blank" href='https://github.com/ivanprejoles'>Github</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Footer;