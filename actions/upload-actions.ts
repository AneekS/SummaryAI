'use server'
// LANGCHAIN related 
import { fetchAndExtractPdfText } from "@/lib/langchain";


// Uses the function fetchAndExtractPdfText(pdfUrl) to download the PDF from the server and extract its raw text content.
export async function generatePdfSummary(uploadResponse: [{
  serverData: {
    userId: string;
    file: {
      url: string;
      name: string;
    };
  };
}]) {
  if (!uploadResponse) {
    return {
      success: false,
      message: 'File upload failed',
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: filename },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      success: false,
      message: 'File upload failed',
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log({pdfText});
    let summary;
    try{
      summary=await generateSummaryFromOpenAI(pdfText);
      console.log({summary});
    } catch(error){
      //  call GEMINI
      if (error instanceof Error && error.message=== 'RATE_LIMIT_EXCEEDED'){
        try{
          summary = await generateSummaryFromGemini(pdfText);
        } catch(geminiError){
          console.log('Gemini API failed after OpenAI quote exceeded', geminiError);
          throw new Error('FAiled to generate summary with available AI provideers')
        }
      }
    }
    if (!summary){
      
    }
  
  
  
  } catch (err) {
    return {
      success: false,
      message: 'Error extracting PDF text',
      data: null,
    };
  }
}
