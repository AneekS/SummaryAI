"use client"
import { forwardRef } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input";
interface UploadFormInputProps{
    onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void;
}


const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
    ({ onSubmit }, ref) => {
      return (
        <form
          ref={ref}
          className="flex flex-col gap-6"
          onSubmit={onSubmit}
        >
          <div className="flex justify-end items-center gap-1.5">
            <Input
              type="file"
              name="file"
              id="file"
              accept="application/pdf"
              required
            />
            <Button className="bg-gradient-to-r from-red-700 via-rose-500 to-rose-600 animate-pulse">
              Upload your PDF
            </Button>
          </div>
        </form>
      );
    }
  );
  
  UploadFormInput.displayName = "UploadFormInput";
 
 export default UploadFormInput;