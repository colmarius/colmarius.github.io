export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto xl:mx-40 md:mx-20">
      <div className="font-light">Copyright © {year} Marius Colacioiu</div>
    </footer>
  );
};
