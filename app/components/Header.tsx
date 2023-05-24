export default function Header(){
    return (
        <header className="p-5 bg-blue-200 flex flex-row justify-between items-center">
            <a href="/"><h1 className="font-bold text-3xl">oslo</h1></a>
            <div className="hidden md:flex">
                <a href="/" className="px-3">Home</a>
                <a href="/medication"className="px-3">Medication</a>
                {/* <a href="#" className="px-3">Resources</a> */}
                <a href="/about" className="px-3">About</a>
            </div>
        </header>
    )
}