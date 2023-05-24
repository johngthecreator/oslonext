import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { IMed } from "./IMed";


type IMedStore = {
    meds: IMed[]
    addMed: (newMed: IMed) => void,
};

// export const useMedStore = create<IMedStore>((set)=>({
//     meds: [],
//     addMed: (newMed: IMed) => {
//         set((state)=>({
//                 meds:[...state.meds, newMed]
//             }));
//     },
// })
// )

const useMedStore = create<IMedStore>()(
    persist(
      (set) => ({
        meds: [],
        addMed: (newMed: IMed) => {
          set((state: any) => ({
            meds: [...state.meds, newMed],
          }));
        },
      }),
      {
        name: 'med-store', // name of the key used in storage
        storage: createJSONStorage(() => sessionStorage), // choose between localStorage or sessionStorage
      }
    )
);
  
export default useMedStore;
