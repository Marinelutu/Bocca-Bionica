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
      <div className="flex justify-center pt-6 opacity-30 hover:opacity-100 transition-opacity">
        <a href="https://stratagenius.it" target="_blank" rel="noopener noreferrer">
          <img
            src="https://turismodentale.it/wp-content/uploads/2024/07/STRATEGENIUSAgency_Rosso-1024x362.webp"
            alt="Stratagenius Agency"
            className="h-8 w-auto"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
