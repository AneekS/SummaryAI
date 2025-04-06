"use client"
import {z} from "zod"
import UploadQuestionInputs from "./upload-question-inputs"
import { toast } from "sonner";

// will get dispalyed in upload/page.tsx section
// main upload form

import { useUploadThing } from "@/utils/uploadthing"
const schema= z.object({
    file: z.instanceof(File,{message:'Invalid File'}).refine((file)=>file.size
        <= 24*1024*1024, {message: 'File size should be less than 24MB',}
    ).refine((file)=> file.type.startsWith('application/pdf'),'File must be a PDF'),
});


// after uploading checking function under the hood.
export default  function UploadQuestionForm(){
    //hook1 - toast
    //hook2 
    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
          console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
          console.error("error occurred while uploading",err);
          toast("Error occured while uploading",{description:"err.message"})
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
        if(!validatedFields.success){
            toast("Something went wrong",{description:validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file'})
        return;
        }
    toast("Uploading PDF",{description:"Hang tight! We are uploading your PDF"});


    //Upload The file to uploading-thing

    const resp = await startUpload([file]);
    if (!resp){

      toast("Something went wrong",{description:"Please use a different file"})
      return ;
    }

       toast("Processing PDF",{description:"Hang tight! Our AI is reading through your document"});

    
    //parse the pdf using lang chain
    //summarize the pdf using ai
    //save the summary to the database
    //redirect to the [id] summary page

}
    

    


    //Dsipaly part 
    return <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
         <UploadQuestionInputs onSubmit={handleSubmit}></UploadQuestionInputs> 
    </div>
}