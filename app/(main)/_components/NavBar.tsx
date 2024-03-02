import { ModeToggle } from "./Navigation/DarkModeToggle";
import Logo from "./Navigation/Logo";

const NavBar = () => {
    return (  
        <header className="z-50 flex flex-row justify-between items-center fixed py-2 mx-auto top-0 w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]" style={{"transform": "none"}}>
            <div className="container flex h-11 justify-between items-center max-w-[85rem] mx-auto">      
                <Logo />
                <div className="flex">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
 
export default NavBar;