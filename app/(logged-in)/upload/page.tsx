import UploadHeader from "@/components/uploads/upload-header"
import UploadForm from "@/components/uploads/upload-form"
// upload routes page.tsx main page
export default function Page(){
return <section>
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-21 sm:py-32 lg:px-8">
              <div className="flex flex-col items-center justify-center gap-6">
              <UploadHeader></UploadHeader>
              <UploadForm></UploadForm>
              </div>
            </div>
    </div>
</section>
}