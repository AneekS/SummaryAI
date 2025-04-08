"use client"
import {z} from "zod"
import UploadFormInput from "./upload-form-inputs";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";
// will get dispalyed in upload/page.tsx section
// main upload form

//function and main working , under the hood of pdf and extracting ait and applyinng all api powerd prompts.
import { useUploadThing } from "@/utils/uploadthing"
import { useRef } from "react";
const schema= z.object({
    file: z.instanceof(File,{message:'Invalid File'}).refine((file)=>file.size
        <= 24*1024*1024, {message: 'File size should be less than 24MB',}
    ).refine((file)=> file.type.startsWith('application/pdf'),'File must be a PDF'),
});


// after uploading checking function under the hood.
export default  function UploadForm(){

    const formRef = useRef<HTMLFormElement>(null)
    //hook1 - toast -- UI enhancer.
    //hook2 -useUploadThing()-- uplaod the pdf.
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

    //Step 1 - uplaodthing
    //Upload The file to uploading-thing
    const resp = await startUpload([file]);
    if (!resp){

      toast("Something went wrong",{description:"Please use a different file"})
      return ;
    }

       toast("Processing PDF",{description:"Hang tight! Our AI is reading through your document"});

    //Step 2: LangChain
    //parse the pdf using lang chain
    const result = await generatePdfSummary(resp);
const {data = null , message=null}= result || {};
    if(data){
      toast("Saving PDF......",{description:"Hang tight! Our AI is saving your summary"});
      formRef.current?.reset();
    }

    //STEP 3 - chatGpr /gemmini for summarize the pdf.
    //summarize the pdf using ai

     
    //save the summary to the database
    //redirect to the [id] summary page

}
    

    


    //Dsipaly part 
    // main rendered part
    return <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
         <UploadFormInput ref={formRef} onSubmit={handleSubmit}></UploadFormInput> 
    </div>
}