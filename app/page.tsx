"use client";
//^^^ if you don't add this then by default every page is a server component so you can't use stuff like useState
import Header from './components/Header';
import { useState} from "react";
import useMedStore from "./lib/useMedStore";
import { IMed } from "./lib/IMed";
import { FaCircle } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const addDrugs = useMedStore(state => state.addMed);
    const [drugOptions, setDrugOptions] = useState([]);
    const [drugSearch, setDrugSearch] = useState<string>("");
  

    const getDrugs = async () => {
        if(drugSearch){
            try{
                const res = await fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drugSearch}`);
                const data = await res.json();
                console.log(data)
                if (data){
                    setDrugOptions(data.drugGroup.conceptGroup[1].conceptProperties);
                };
            }catch (e){
                console.log(e);
                alert("Can't find that medication!")
            }
        }
    }
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <div className='flex h-full w-full flex-col items-center'>
        <div className='flex flex-col w-full h-2/3 bg-secondary p-6'>
          <h1 className="text-white text-2xl font-black">Search</h1>
          <div className='flex bg-white min-h-1/6 md:h-1/5 rounded-xl items-center justify-between overflow-hidden my-2'>
            <input type='text' onChange={(e)=>setDrugSearch(e.target.value)} className='my-4 outline-0 w-4/5 px-2 m-0'/>
            <button onClick={()=>getDrugs()} className='m-2 h-[20px] w-[20px] bg-secondary rounded-xl'></button>
          </div>
          <div className='flex flex-col overflow-y-scroll'>
            {drugOptions.map((drug: IMed)=>{
              return(
                <button key={uuidv4()} onClick={()=>{addDrugs({name: drug.name, rxcui: drug.rxcui})}} className='flex items-center gap-2 my-2'>
                  <FaCircle size={13} className='text-white' />
                  <h1 className='truncate ... text-lg text-white'>{drug.name}</h1>
                </button>
              )
            })}
          </div>
        </div>
        <div className="h-1/2 w-full bg-wave bg-no-repeat">
        </div>
      </div>
      <Header />
    </main>
  )
}