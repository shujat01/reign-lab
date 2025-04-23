const Hero = () => {
  return (
    <section 
      id="home" 
      className="parallax h-screen-80 flex items-center relative" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1745227041517-4bfc257c674f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "80vh" 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">REIGN Lab</h1>
          <p className="text-xl md:text-2xl text-white mb-8">REsearch in Integrative GeNomics of hypoxia</p>
          <a 
            href="#research" 
            className="bg-accent px-8 py-3 rounded-md font-medium text-neutral-800 hover:bg-accent-light transition-colors inline-block"
          >
            Discover Our Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
