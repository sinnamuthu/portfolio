"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";
import styles from "./erp4dentist-gallery.module.css";

const screenshots = [
  {
    src: "/erp4dentist/erp4dentist-01.webp",
    title: "Practice dashboard",
    detail: "At-a-glance appointments, clinic trends, and daily activity.",
  },
  {
    src: "/erp4dentist/erp4dentist-02.webp",
    title: "Appointment calendar",
    detail: "A calendar view for managing the practice schedule.",
  },
  {
    src: "/erp4dentist/erp4dentist-03.webp",
    title: "Appointment management",
    detail: "A central list for reviewing and managing appointments.",
  },
  {
    src: "/erp4dentist/erp4dentist-04.webp",
    title: "Treatment selection",
    detail: "Selecting teeth and planning treatment directly in the dental chart.",
  },
  {
    src: "/erp4dentist/erp4dentist-05.webp",
    title: "Treatment estimation",
    detail: "Configuring a proposed procedure from the treatment workflow.",
  },
  {
    src: "/erp4dentist/erp4dentist-06.webp",
    title: "Interactive tooth chart",
    detail: "A detailed tooth-by-tooth planning and estimation view.",
  },
  {
    src: "/erp4dentist/erp4dentist-07.webp",
    title: "Practice reports",
    detail: "Reporting and finance views for monitoring practice activity.",
  },
  {
    src: "/erp4dentist/erp4dentist-08.webp",
    title: "Branch management",
    detail: "A central workspace for organizing branches and team access.",
  },
];

export default function Erp4DentistGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = screenshots[selectedIndex];

  function selectScreenshot(index: number) {
    setSelectedIndex((index + screenshots.length) % screenshots.length);
  }

  function openExpandedView() {
    setIsExpanded(true);
    dialogRef.current?.showModal();
  }

  function closeExpandedView() {
    dialogRef.current?.close();
    setIsExpanded(false);
  }

  return (
    <section className={styles.gallery} aria-labelledby="screenshots-title">
      <div className={styles.galleryHeader}>
        <div>
          <span className={styles.galleryEyebrow}>
            A CLOSER LOOK <span /> FROM THE LIVE PRODUCT
          </span>
          <h3 id="screenshots-title">Built for the real world.</h3>
          <p>
            Real ERP4Dentist screens from the product I&apos;m developing. Select a
            screen to take a closer look.
          </p>
        </div>
        <span className={styles.galleryCount}>
          {String(selectedIndex + 1).padStart(2, "0")}{" "}
          <span>/</span> {String(screenshots.length).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.featuredScreenshot}>
        <button
          className={styles.screenshotImageButton}
          type="button"
          onClick={openExpandedView}
          aria-label={`Expand screenshot: ${selected.title}`}
        >
          <Image
            key={selected.src}
            src={selected.src}
            alt={selected.title}
            fill
            priority
            sizes="(max-width: 720px) 100vw, (max-width: 1150px) 82vw, 1000px"
            className={styles.featuredImage}
          />
          <span className={styles.expandHint}>
            <Maximize2 /> View larger
          </span>
        </button>
        <button
          className={`${styles.galleryArrow} ${styles.previousArrow}`}
          type="button"
          aria-label="Previous screenshot"
          onClick={() => selectScreenshot(selectedIndex - 1)}
        >
          <ArrowLeft />
        </button>
        <button
          className={`${styles.galleryArrow} ${styles.nextArrow}`}
          type="button"
          aria-label="Next screenshot"
          onClick={() => selectScreenshot(selectedIndex + 1)}
        >
          <ArrowRight />
        </button>
        <div className={styles.featuredCaption}>
          <div>
            <span className={styles.shotNumber}>
              SCREEN {String(selectedIndex + 1).padStart(2, "0")}
            </span>
            <h4>{selected.title}</h4>
          </div>
          <p>{selected.detail}</p>
        </div>
      </div>

      <div className={styles.thumbnailGrid} aria-label="Choose a product screenshot">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            className={`${styles.thumbnail} ${index === selectedIndex ? styles.selectedThumbnail : ""}`}
            type="button"
            onClick={() => selectScreenshot(index)}
            aria-pressed={index === selectedIndex}
            aria-label={`Show screenshot ${index + 1}: ${screenshot.title}`}
          >
            <span className={styles.thumbnailImage}>
              <Image
                src={screenshot.src}
                alt=""
                fill
                sizes="(max-width: 520px) 42vw, (max-width: 1000px) 22vw, 200px"
              />
              <span className={styles.thumbnailIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
            <span className={styles.thumbnailLabel}>{screenshot.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.privacyNote}>
        <ShieldCheck />
        <span>
          Screenshots from the real app. Patient and personal details have been
          redacted for privacy.
        </span>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-labelledby="expanded-screenshot-title"
        onClose={() => setIsExpanded(false)}
        onCancel={() => setIsExpanded(false)}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeExpandedView();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeExpandedView();
        }}
      >
        {isExpanded && (
          <div className={styles.lightboxContent}>
            <div className={styles.lightboxHeader}>
              <span>
                <strong id="expanded-screenshot-title">{selected.title}</strong>
                <small>
                  SCREEN {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </small>
              </span>
              <button
                className={styles.closeButton}
                type="button"
                aria-label="Close expanded screenshot"
                onClick={closeExpandedView}
              >
                <X />
              </button>
            </div>
            <div className={styles.lightboxImage}>
              <Image
                key={`expanded-${selected.src}`}
                src={selected.src}
                alt={selected.title}
                fill
                sizes="96vw"
                priority
              />
            </div>
            <div className={styles.lightboxFooter}>
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={() => selectScreenshot(selectedIndex - 1)}
              >
                <ArrowLeft />
              </button>
              <p>{selected.detail}</p>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={() => selectScreenshot(selectedIndex + 1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
