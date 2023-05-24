"use client";
import { useState, useEffect } from "react";
import useMedStore from "../lib/useMedStore";
import { IMed } from "../lib/IMed";

export default function Medication(){
    const drugs = useMedStore(state => state.meds);
    const addDrugs = useMedStore(state => state.addMed);
    const [drugOptions, setDrugOptions] = useState([]);
    const [drugList, setDrugList] = useState<IMed[]>([]);
    const [drugSearch, setDrugSearch] = useState<string>("");
  
    useEffect(() => {
        setDrugList(drugs);
    }, [drugs]);

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
            }
        }
    }
    // if(drugOptions){
    //     return(
    //         <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
    //             {/* {drugs.map(drug=>{
    //                 return(
    //                     <div>
    //                         <h1>{drug.name}</h1>
    //                         <h1>{drug.alt}</h1>
    //                         <h1>{drug.rxcui}</h1>
    //                     </div>
    //                 )
    //             })}
    //             <button onClick={()=>addTest()}>Test Med</button> */}
    //             {drugOptions.map((drug: IMed)=>{
    //                 return(
    //                     <h1>{drug.name}</h1>
    //                 )
    //             })}
    //             <button onClick={()=>getDrugs()}>Get Meds</button>
    //         </main>
    //     )
    // }

    if(!drugList){
        return(
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
                <div>
                    <h1>loading...</h1>
                </div>
            </main>
        )
    }


    
    return(
        <main className="p-4 bg-white">
            <div className="flex min-h-screen flex-col md:flex-row gap-4 bg-white items-center justify-center">
                <div>
                    <h1 className="text-xl font-bold">Search For Medication</h1>
                    <div className="flex flex-row gap-2 max-w-1/4">
                        <input type="text" onChange={(e)=>{setDrugSearch(e.target.value)}} className="border-solid border-2 w-full rounded-lg p-2"/>
                        <button className="bg-blue-200 rounded-lg px-4 py-2" onClick={()=>getDrugs()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col max-w-[275px] h-[300px] overflow-y-scroll md:max-w-1/4">
                        {drugOptions.map((drug: IMed)=>{
                            return(
                                <button className="bg-blue-200 p-2 min-w-[275px] rounded-lg my-2 truncate ... overflow-hidden" key={`${drug.rxcui}+${drug.name}`} onClick={()=>{addDrugs({name: drug.name, rxcui: drug.rxcui})}}>{drug.name}</button>
                            )
                        })}
                    </div>

                </div>
                <div>
                    <h1 className="text-xl font-bold">Your List</h1>
                    <div className="max-w-[275px] h-[300px] md:max-w-1/4 overflow-y-scroll">
                        {drugList.map(drug=>{
                            return(
                                <div className="bg-blue-200 rounded-lg p-2 my-2" key={`${drug.rxcui}+${drug.name}`}>
                                    <p className="truncate ...">{drug.name}</p>
                                    <p>{drug.rxcui}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </main>
    )

}
