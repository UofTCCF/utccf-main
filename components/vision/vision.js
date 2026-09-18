import PdfLink from "../pdfLink/pdfLink";
export default function Vision({ fileName, href, children }) {
  if (!fileName && !href) return null;
  return (
    <PdfLink fileName={fileName} href={href}>
      {children}
    </PdfLink>
  );
}
