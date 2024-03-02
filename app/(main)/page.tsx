import { AppParallax } from "./_components/Blocks/AppParallax";
import Footer from "./_components/Blocks/Footer";
import { InfiniteMovingCardsDemo } from "./_components/Blocks/InfiniteCardServices";
import { ProjectsBento } from "./_components/Blocks/Projects";
import { SpotlightPreview } from "./_components/Blocks/Spotlight";
import NavBar from "./_components/NavBar";

const MainPage = () => {
    return (  
        <div className="w-full h-full">
            <NavBar />
            <main className="w-full h-full">
                <SpotlightPreview />
                <InfiniteMovingCardsDemo />
                <AppParallax/>
                <ProjectsBento />
                <Footer />
            </main>
        </div>
    );
}
 
export default MainPage;