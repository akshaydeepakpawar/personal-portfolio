"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { FaTimes, FaSpinner, FaPaperPlane } from "react-icons/fa";
import { useContactModal } from "@/hooks/use-contact-modal";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeovarv";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, duration: 0.5, bounce: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab") return;

      const currentModal = modalRef.current;
      if (!currentModal) return;

      const focusableElements =
        currentModal.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    const firstFocusable = modal.querySelector<HTMLElement>(focusableSelector);
    setTimeout(() => firstFocusable?.focus(), 100);

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        "Thank you for reaching out. I'll get back to you soon."
      );
      reset();
      setTimeout(close, 2000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      close();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="gradient-border relative w-full max-w-lg rounded-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <button
                onClick={close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-white/[0.06] hover:text-neutral-300"
                aria-label="Close contact form"
              >
                <FaTimes className="h-4 w-4" />
              </button>

              <div className="mb-6">
                <h3
                  id="contact-modal-title"
                  className="font-display text-xl font-bold text-white sm:text-2xl"
                >
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Fill out the form below and I&apos;ll get back to you as
                  soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-neutral-300"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-accent-500/[0.03] focus:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-neutral-300"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-accent-500/[0.03] focus:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-sm font-medium text-neutral-300"
                  >
                    Phone Number{" "}
                    <span className="text-neutral-600">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...register("phone")}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-accent-500/[0.03] focus:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-sm font-medium text-neutral-300"
                  >
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Full-Stack Developer Opportunity"
                    {...register("subject")}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-accent-500/[0.03] focus:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-neutral-300"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    {...register("message")}
                    className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-accent-500/[0.03] focus:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="h-3.5 w-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
