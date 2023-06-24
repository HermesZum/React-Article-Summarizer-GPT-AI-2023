import {Hero} from "./components/Hero.jsx";
import {Demo} from "./components/Demo.jsx";
import "./App.css";

export const App = () => {
    return (
        <>
            <main>
                <div className="main">
                    <div className="gradient" />
                </div>
            </main>
            <div className="app">
                <Hero />
                <Demo />
            </div>
        </>
    )
}
