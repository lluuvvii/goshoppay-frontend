const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 flex h-60">
      {/* Layout Bagian Kiri */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gray-300 w-52 h-4 mr-4 animate-pulse"></div>
        <div className="bg-gray-300 w-52 h-4 animate-pulse"></div>
      </div>

      {/* Garis Pemisah */}
      <div className="w-px bg-gray-400 mx-4"></div>

      {/* Layout Bagian Kanan */}
      <div className="flex-1 flex items-center">
        <div className="bg-gray-300 w-52 h-4 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;