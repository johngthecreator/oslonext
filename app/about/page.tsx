import Image from "next/image"
export default function About(){
    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-3xl font-bold m-4">Meet Oslo</h1>
            <div className="w-1/4 flex justify-center">
                <Image src={"/bear.png"} width={200} height={200} alt="bear png" />
                <p>Oslo is an open-source medication app that helps you to find and list alternatives to medication that you have. Medication should be gree and accessible to all.</p>
            </div>
        </div>
    )
}