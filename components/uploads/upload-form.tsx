"use client"
import {z} from "zod"
import UploadFormInputs from "./upload-form-inputs"
// main upload form
//using upload form inputs componenents for better strcuturing.
import { useUploadThing } from "@/utils/uploadthing"
const schema= z.object({
    file: z.instanceof(File,{message:'Invalid File'}).refine((file)=>file.size
        <= 24*1024*1024, {message: 'File size should be less than 24MB',}
    ).refine((file)=> file.type.startsWith('application/pdf'),'File must be a PDF'),
});


// after uploading checking function under the hood.
export default  function UploadForm(){

    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
          console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
          console.error("error occurred while uploading",err);
        },
        onUploadBegin: ({ file }) => {
          console.log("upload has begun for", file);
        },
      });
      



    //function to be applied, once form gets submitted
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>)=>
    {
        e.preventDefault();
        //get the file 
        //ACCEPT THE FILE AND ITS DETAILS
        console.log("submitted file");
        const formData= new FormData(e.currentTarget);
        const file= formData.get('file') as File;
        //zod validation 
        // validating the pdf data field.
        const validatedFields=schema.safeParse({file});
        console.log(validatedFields)
        if(!validatedFields.success){
            console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invali file');
        
        return;
        }
    
    //Upload The file to uploading-thing

    const resp = await startUpload([file]);
    if (!resp)
        return ;
    
    //parse the pdf using lang chain
    //summarize the pdf using ai
    //save the summary to the database
    //redirect to the [id] summary page

}
    

    


    //Dsipaly part 
    return <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
         <UploadFormInputs onSubmit={handleSubmit}></UploadFormInputs> 
    </div>
}