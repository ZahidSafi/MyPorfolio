import React, { useEffect } from "react";
import { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Document, Page, pdfjs } from "react-pdf";

const Resume = () => {
  const [file, setFile] = useState();

  useEffect(() => {
    const url =
      "https://api.github.com/repos/ZahidSafi/ZahidSafiResume/contents/ZahidSafiResume.pdf";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resumeContent) => {
        setFile(resumeContent.download_url);
      });
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 opacity-0 animate-fade-in-down">
      {file && (
        <Document file={file} key={file}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default Resume;
