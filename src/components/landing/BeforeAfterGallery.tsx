const images = [
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.002-qrl6vemo2fb4py37v53k0389vya1wngfh6w0b4gdxk.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.002.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.003-qrl6vfki99cf1k1upni6kkzqhc5f4ck5tbjhseezrc.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.003.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.004-qrl6vhg6mxezorz4eobfpkino3w5jqrmhkugqyc7ew.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.004.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.005-qrl6vie0trga0dxr96q2a2a49hrirfvctphy88at8o.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.005.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.006-qrl6vk9p7fiunlv0y7jbf1t1g9i96u2thysx6s80w8.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.006.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.007-qrl6vl7je9k4z7tnspxxzjki1ndmej6ju3geo26mq0.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.007.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.008-qrqawjgwhim9ycpmqe4ltrd445u1zvs40k8qsbavt4.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.008.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.009-qrqawhl83ujpb4sd1dbcoru6xe3bkhkncaxrtrdo5k.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.009.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.010-qrqawgndx0iezitq6uwq4a2qc07ycsgx06aachf2bs.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.010.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.011-qrqawerpjcfucawghu3gzajt58h7xe9gbwzbdxhuo8.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.011.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.012-qrqawcw15od9p2z6sta7ub0vygqhi01znnocfdkn0o.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.012.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.013-qrqawb0cs0ap1v1x3sgypbhyrozr2luizeddgtnfd4.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.013.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.014-qrqaw94oec84en4nernpkbz1kx90n7n2b52ei9q7pk.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.014.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.015-qrqaw86u7i6u3160k992zu7kzjdnfijbz0ex0zrlvs.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.015.webp"
  },
  {
    thumb: "https://turismodentale.it/wp-content/uploads/elementor/thumbs/Pirma-e-Dopo-no-watemark.016-qrqaw6b5tu49ft8qv8ftuuonsrmx04bvar3y2fue88.webp",
    full: "https://turismodentale.it/wp-content/uploads/2024/07/Pirma-e-Dopo-no-watemark.016.webp"
  },
];

const BeforeAfterGallery = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Prima e Dopo
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {images.map((img, i) => (
          <a
            key={i}
            href={img.full}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary shadow-sm transition-transform hover:scale-105"
          >
            <img
              src={img.thumb}
              alt={`Risultato ${i + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-dark/40 text-dark-foreground text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded bg-destructive/90 px-2 py-1 uppercase">Prima</span>
              <span className="rounded bg-teal px-2 py-1 uppercase">Dopo</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterGallery;
