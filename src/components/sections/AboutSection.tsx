import InteractiveLifecycle from '@/components/sections/InteractiveLifecycle';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Container for the 600x600px interactive element */}
            <div className="w-[600px] h-[600px] overflow-hidden flex justify-center items-center">
              <InteractiveLifecycle />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-headline">
              Our Process
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                At OpusWeb, we're passionate about transforming your vision into exceptional digital realities. We believe that a transparent and collaborative process is key to crafting web solutions that not only meet but exceed expectations.
              </p>
              <p>
                Our journey together begins with <span className="text-primary font-semibold">Discovery</span>, where we dive deep into your needs and ideas. Next, our <span className="text-accent font-semibold">Design</span> phase focuses on creating intuitive and engaging user interfaces. This flows into meticulous <span className="text-primary font-semibold">Development</span>, where we build robust and scalable applications. Rigorous <span className="text-accent font-semibold">Testing</span> ensures every detail is polished and performs flawlessly.
              </p>
              <p>
                Finally, we orchestrate a smooth <span className="text-primary font-semibold">Launch</span>, bringing your digital masterpiece to the world. Our mission is to guide you through each step, ensuring a final product that is both innovative and effective, truly representing your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
