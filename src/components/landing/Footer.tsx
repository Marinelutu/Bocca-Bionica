const Footer = () => (
  <footer className="bg-dark text-dark-foreground py-10">
    <div className="container mx-auto px-4 text-center space-y-4 md:px-8">
      <p className="font-display text-xl font-bold">Turismo Dentale</p>
      <div className="flex items-center justify-center gap-4 text-xs opacity-60">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:underline">Cookie Policy</a>
      </div>
      <p className="text-xs opacity-40">
        2024 © turismodentale.it tutti i diritti riservati | SDT MARKETING &amp; SERVICES SRL, VAT: RO 49620161 –
        Str Mitropolit Varlam nr 54 Iasi – 700198
      </p>
    </div>
  </footer>
);

export default Footer;
