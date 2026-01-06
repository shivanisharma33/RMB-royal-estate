const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
      <h1 className="text-sm tracking-widest uppercase">
        Marchetti Group
      </h1>

      <div className="flex items-center gap-6 text-xs uppercase tracking-wider">
        <span>Buy</span>
        <span>Sold</span>
        <span className="text-xl">≡</span>
      </div>
    </header>
  );
};

export default Header;
