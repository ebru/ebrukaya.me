export const slugify = (string) => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export const downloadTxtFile = ({ text, title }) => {
  const slug = slugify(title);
  const element = document.createElement("a");
  const file = new Blob([text], { type: 'text/plain' });

  element.href = URL.createObjectURL(file);
  element.download = `${slug}.md`;
  document.body.appendChild(element);
  element.click();
}