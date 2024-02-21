import { useState } from "react";
import { Document, Page } from "react-pdf";

interface PdfViewerProps {
  files: string;
}

export default function PdfViewer({ files }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={files}
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full h-full"
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {numPages && (
        <p className="text-black w-full bg-white">
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
}
