import React, { useState, useEffect } from "react";
import axios from "axios";
import { Document, Page } from "react-pdf";

interface PdfViewerProps {
  userId: string;
  fileName: string;
}

export default function PdfViewer({ userId, fileName }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileContent, setFileContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/getFiles/${userId}/${fileName}`,
          {
            responseType: "blob",
          }
        );
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setFileContent(fileReader.result as string);
        };
        fileReader.readAsDataURL(response.data);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };
    fetchFile();
  }, [userId, fileName]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="font-montserrat">
      {fileContent && (
        <Document
          file={fileContent}
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full h-full"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      )}
      {numPages && (
        <p className="text-black w-full bg-white pl-2">
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
}
