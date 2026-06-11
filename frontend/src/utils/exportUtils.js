import jsPDF from "jspdf";

export const exportPDF = (title, content) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(title, 20, 20);

  doc.setFontSize(11);

  const splitText = doc.splitTextToSize(content, 170);

  doc.text(splitText, 20, 40);

  doc.save(`${title}.pdf`);
};

export const exportTXT = (title, content) => {
  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `${title}.txt`;

  a.click();

  URL.revokeObjectURL(url);
};