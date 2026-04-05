"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiLinkedin } from "react-icons/fi";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { Testimonial, testimonials } from "@/data/testimonial-data";

// ── TestimonialSection ────────────────────────────────────────────────────────
// Video testimonials with transcript toggle.
// Carousel uses Embla under the hood via shadcn/ui.
const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-muted/30 border-t border-border"
      aria-labelledby="testimonials-heading"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[62rem] mx-auto">
        <div className="sm:text-center mb-8 sm:mb-16 flex flex-col sm:items-center sm:justify-center sm:mx-auto">
          <div className="flex sm:flex-row flex-col sm:items-center gap-0.5 sm:gap-2">
            <motion.span
              className="text-4xl sm:mb-4 block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <img
                loading="lazy"
                src="speaking.svg"
                className="w-10 h-10"
                alt=""
                aria-hidden="true"
              />
            </motion.span>
            <motion.h2
              id="testimonials-heading"
              className="text-[28px] whitespace-nowrap sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Impressions That Last...
            </motion.h2>
          </div>
          <motion.p
            className="text-muted-foreground leading-[26px] text-left text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Feedback and experiences from people I&apos;ve been privileged to
            work with.
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 pb-2">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="group relative h-full">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                      {/* Thumbnail */}
                      <div
                        className={`relative aspect-video bg-fill ${testimonial.image} cursor-pointer`}
                        onClick={() => {
                          setSelectedTestimonial(testimonial);
                          setShowTranscript(false);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Play ${testimonial.name}'s testimonial`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setSelectedTestimonial(testimonial);
                            setShowTranscript(false);
                          }
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <motion.div
                            className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play
                              className="w-5 h-5 text-foreground ml-0.5"
                              aria-hidden="true"
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                            aria-label={`View ${testimonial.name}'s LinkedIn`}
                          >
                            <FiLinkedin
                              className="w-4 h-4 text-[#0077B5]"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-3 w-full text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setSelectedTestimonial(testimonial);
                            setShowTranscript(true);
                          }}
                        >
                          <FileText
                            className="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          View Transcript
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-foreground w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    role="tab"
                    aria-selected={index === current}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </motion.div>
      </div>

      {/* Video modal */}
      <Dialog
        open={!!selectedTestimonial}
        onOpenChange={() => {
          setSelectedTestimonial(null);
          setShowTranscript(false);
        }}
      >
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span>{selectedTestimonial?.name}</span>
              {selectedTestimonial && (
                <a
                  href={selectedTestimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin
                    className="w-4 h-4 text-[#0077B5]"
                    aria-hidden="true"
                  />
                </a>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedTestimonial && (
            <div className="space-y-4">
              <div
                className={clsx(
                  "relative rounded-lg overflow-hidden",
                  selectedTestimonial.video !== null &&
                    "aspect-video bg-black/90",
                )}
              >
                {selectedTestimonial.video && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white h-full">
                    <Play className="w-16 h-16 opacity-80" aria-hidden="true" />
                    <video
                      src={`/${selectedTestimonial.video.replace(/^\/+/g, "")}`}
                      controls
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      controlsList="nodownload"
                      poster={selectedTestimonial.poster}
                      className="object-contain bg-[#0077B5]/10 object-center size-full"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {selectedTestimonial.role} at {selectedTestimonial.company}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTranscript(!showTranscript)}
                >
                  <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                  {showTranscript ? "Hide" : "Show"} Transcript
                </Button>
              </div>

              <AnimatePresence>
                {showTranscript && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-muted rounded-lg p-4 space-y-2">
                      {Array.isArray(selectedTestimonial.transcript) ? (
                        selectedTestimonial.transcript.map((line, i) => (
                          <p
                            key={i}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedTestimonial.transcript}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialSection;
