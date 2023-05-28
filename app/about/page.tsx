import Header from "../components/Header";
export default function About(){
    return(
    <main className="flex h-full flex-col items-center justify-between">
      <div className='flex h-full w-full flex-col items-center'>
        <div className='flex flex-col w-full h-1/6 bg-secondary p-6'>
          <h1 className="text-white text-2xl font-black">About</h1>
        </div>
        <div className="h-1/3 w-full bg-wave bg-no-repeat">
        </div>
        <div className="flex flex-col p-2">
            <h2 className="text-xl font-extrabold">Meet Pillz</h2>
            <p>Pillz is a web app focused on checking drug interactions. Search for the medications you take, add them to the list and check the results tab for the interaction report.</p>
        </div>
      </div>
      <Header />
    </main>
    )
}