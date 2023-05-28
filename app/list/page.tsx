"use client";
import Header from '../components/Header';
import { useState, useEffect } from "react";
import useMedStore from "../lib/useMedStore";
import { IMed } from "../lib/IMed";


export default function List(){
    const drugs = useMedStore(state => state.meds);
    const [drugList, setDrugList] = useState<IMed[]>([]);
    useEffect(() => {
        setDrugList(drugs);
    }, [drugs]);

    if (!drugList){
        return(
            <main className="flex h-full flex-col items-center justify-between">
            <div className='flex h-full w-full flex-col items-center'>
                <div className='flex flex-col w-full h-1/2 bg-secondary p-6'>
                <h1 className="text-white text-2xl font-black">My List</h1>
                </div>
                <div className="h-1/3 w-full bg-wave bg-no-repeat">
                </div>
                <h2>Loading....</h2>
            </div>
            <Header />
            </main>

        )
    }
    return(
    <main className="flex h-full flex-col items-center justify-between">
      <div className='flex h-full w-full flex-col items-center'>
        <div className='flex flex-col w-full h-1/2 bg-secondary p-6'>
          <h1 className="text-white text-2xl font-black">My List</h1>
            <div className='flex flex-col overflow-y-scroll'>
            {drugList.map((drug: IMed)=>{
                return(
                <button className='flex items-center gap-2 my-2'>
                    {/* <FaCircle size={13} className='text-white' /> */}
                    <h1 className='truncate ... text-lg text-white'>{drug.name}</h1>
                </button>
                )
            })}
            </div>
        </div>
        <div className="h-1/3 w-full bg-wave bg-no-repeat">
        </div>
      </div>
      <Header />
    </main>
    )

}
