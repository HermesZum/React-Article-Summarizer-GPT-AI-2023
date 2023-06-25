import {logo} from "../assets";

export const Hero = () => {
    return (
        <>
            <header className="w-full flex justify-center items-center flex-col">
                <nav className="flex justify-between items-center w-full mb-10 pt-3">
                    <img src={logo} alt="logo" className="w-28 object-contain" />
                    <button
                        type="button"
                        onClick={() => window.open("https://github.com/HermesZum/React-Article-Summarizer-GPT-AI-2023")}
                        className="black_btn sm:mr-5"
                    >
                        GitHub
                    </button>
                </nav>
                <h1 className="head_text">
                    Summarize Articles with <br className='max-md:hidden' />
                    <span className='orange_gradient '>OpenAI GPT-4</span>
                </h1>
                <h2 className='desc'>
                    Simplify your reading with Summarize, an open-source article summarizer
                    that transforms lengthy articles into clear and concise summaries
                </h2>
            </header>
        </>
    )
}
