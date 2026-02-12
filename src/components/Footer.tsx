const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-muted-foreground font-sans">
          © {new Date().getFullYear()} Prudhvi Charan Kalva. Built with passion for DevOps.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
