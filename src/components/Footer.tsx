export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto">
      <div className="font-light mb-10">Copyright © {year} Marius Colacioiu</div>
    </footer>
  );
};
