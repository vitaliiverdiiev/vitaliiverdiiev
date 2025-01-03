export const normalizePath = (path: string) => {
  const segments = path.split("/");

  if (segments[1] === "en" || segments[1] === "ua") {
    return `/${segments.slice(2).join("/")}`;
  }

  return path;
};
