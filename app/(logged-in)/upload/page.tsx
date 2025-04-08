import UploadHeader from "@/components/uploads/upload-header";
import UploadForm from "@/components/uploads/upload-form";
import UploadQuestionHeader from "@/components/uploads/upload-question-header";
import UploadQuestionForm from "@/components/uploads/upload-question-form";
// Upload routes page.tsx main page
export default function Page() {
  return (
    <section>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-21 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="grid grid-cols-2 gap-20">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <UploadHeader />
                        <UploadForm />
                    </div>
                    {/* <div className="flex flex-col justify-center items-center gap-6">
                        <UploadQuestionHeader></UploadQuestionHeader>
                        <UploadQuestionForm />
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
