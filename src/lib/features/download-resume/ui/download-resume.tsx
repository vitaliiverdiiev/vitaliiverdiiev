import { Button } from "@nextui-org/react";

type Props = {
  label: string;
  link?: string;
  downloadName?: string;
};

export const DownloadResume: React.FC<Props> = ({
  label,
  downloadName = "Resume",
  link = "/documents/resume.pdf",
}) => {
  const downloadResume = () => {
    fetch(link, {
      method : "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          downloadName
        );

        document.body.appendChild(link);

        link.click();

        link.parentNode!.removeChild(link);
      });
  };

  return (
    <Button variant="ghost" onPress={downloadResume}>
      {label}
    </Button>
  );
};
