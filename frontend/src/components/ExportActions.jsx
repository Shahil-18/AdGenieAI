import { Download, FileText } from "lucide-react";
import { exportPDF, exportTXT } from "../utils/exportUtils";

function ExportActions({ title, content }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => exportPDF(title, content)}
        className="bg-[#111827] text-white px-4 py-2 rounded-xl flex items-center gap-2"
      >
        <FileText size={16} />
        PDF
      </button>

      <button
        onClick={() => exportTXT(title, content)}
        className="bg-[#f3f4f6] px-4 py-2 rounded-xl flex items-center gap-2"
      >
        <Download size={16} />
        TXT
      </button>
    </div>
  );
}

export default ExportActions;