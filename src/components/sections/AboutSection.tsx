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
              About Us
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                At OpusWeb, we are passionate about creating exceptional digital experiences. Our team of skilled developers, designers, and strategists work together to deliver solutions that drive your business forward.
              </p>
              <p>
                Founded in 2020, we have helped over 100 clients transform their ideas into reality. We believe in the power of technology to solve problems and create opportunities, crafting bespoke web solutions that are both innovative and effective.
              </p>
              <p>
                Our mission is to build not just websites, but digital masterpieces that stand out in the crowded online world, ensuring your brand's voice is heard loud and clear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
