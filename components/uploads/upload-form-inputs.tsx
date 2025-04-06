"use client"
import { Button } from "../ui/button"
import { Input } from "../ui/input";
interface UploadFormInputs{
    onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void;
}
export default function UploadFormInputs({onSubmit,}:UploadFormInputs){
    return (
        
               <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex justify-end items-center gap-1.5">
                <Input type="file" name="file" id="file" accept="application/pdf" required className=""/>
                
                <Button className="bg-linear-to-r from-red-7000 via-rose-500 to-rose-600 animate-pulse">Upload your PDF</Button>
                </div>
        </form>
        
     
    )
}