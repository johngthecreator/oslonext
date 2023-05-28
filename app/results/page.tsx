"use client";
import Header from "../components/Header";

export default function Results(){
    return(
    <main className="flex h-full flex-col items-center justify-between">
      <div className='flex h-full w-full flex-col items-center'>
        <div className='flex flex-col w-full h-3/4 bg-secondary p-6'>
          <h1 className="text-white text-2xl font-black">Results</h1>
        </div>
        <div className="h-1/3 w-full bg-wave bg-no-repeat">
        </div>
      </div>
      <Header />
    </main>
    )
}