"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import styles from "./stayerp-gallery.module.css";

const screenshots = [
  {
    src: "/stayerp/stayerp-01.webp",
    title: "Room operations",
    detail: "A calendar-led view of room availability and active stays.",
  },
  {
    src: "/stayerp/stayerp-02.webp",
    title: "Reservation details",
    detail: "Reservation information and stay details from the front desk.",
  },
  {
    src: "/stayerp/stayerp-03.webp",
    title: "Accounts overview",
    detail: "Hotel income, expenses, balances, and transaction tracking.",
  },
  {
    src: "/stayerp/stayerp-04.webp",
    title: "Room setup",
    detail: "Room categories, pricing, amenities, and configuration.",
  },
  {
    src: "/stayerp/stayerp-05.webp",
    title: "Kitchen dashboard",
    detail: "A live workflow for incoming kitchen orders and preparation.",
  },
  {
    src: "/stayerp/stayerp-06.webp",
    title: "Inventory dashboard",
    detail: "Inventory levels, usage trends, and stock alerts.",
  },
  {
    src: "/stayerp/stayerp-07.webp",
    title: "WhatsApp notifications",
    detail: "Hotel messaging settings for WhatsApp notifications.",
  },
];

export default function StayerpGallery() {
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
    <div className={styles.gallery} aria-labelledby="stayerp-gallery-title">
      <div className={styles.galleryHeader}>
        <div>
          <span className={styles.galleryEyebrow}>
            PRODUCT TOUR <span /> STAYERP HOTEL MANAGEMENT
          </span>
          <h3 id="stayerp-gallery-title">Made for everyday hotel operations.</h3>
          <div className={styles.productAccess}>
            <a
              className={styles.productLink}
              href="https://stayerp.in/"
              target="_blank"
              rel="noreferrer"
            >
              Open Stayerp <ArrowRight aria-hidden="true" />
            </a>
            <div className={styles.demoCredentials} aria-label="Demo account credentials">
              <span><strong>Username</strong> sinnamuthu98765@gmail.com</span>
              <span><strong>Password</strong> 123456</span>
            </div>
          </div>
          <p>Explore the product screens. Select any image to view it in detail.</p>
        </div>
        <span className={styles.galleryCount}>
          {String(selectedIndex + 1).padStart(2, "0")}
          <span>/</span>
          {String(screenshots.length).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.featuredScreenshot}>
        <button
          className={styles.screenshotButton}
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
            sizes="(max-width: 720px) 100vw, 1100px"
          />
          <span className={styles.expandHint}>
            <Maximize2 aria-hidden="true" /> View larger
          </span>
        </button>
        <button
          className={`${styles.galleryArrow} ${styles.previousArrow}`}
          type="button"
          onClick={() => selectScreenshot(selectedIndex - 1)}
          aria-label="Previous screenshot"
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <button
          className={`${styles.galleryArrow} ${styles.nextArrow}`}
          type="button"
          onClick={() => selectScreenshot(selectedIndex + 1)}
          aria-label="Next screenshot"
        >
          <ArrowRight aria-hidden="true" />
        </button>
        <div className={styles.featuredCaption}>
          <div>
            <span>SCREEN {String(selectedIndex + 1).padStart(2, "0")}</span>
            <h4>{selected.title}</h4>
          </div>
          <p>{selected.detail}</p>
        </div>
      </div>

      <div className={styles.thumbnailGrid} aria-label="Choose a Stayerp screenshot">
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
              <Image src={screenshot.src} alt="" fill sizes="(max-width: 720px) 22vw, 160px" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </span>
            <span className={styles.thumbnailLabel}>{screenshot.title}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-labelledby="stayerp-expanded-title"
        onClose={() => setIsExpanded(false)}
        onCancel={closeExpandedView}
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
                <strong id="stayerp-expanded-title">{selected.title}</strong>
                <small>
                  SCREEN {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </small>
              </span>
              <button
                type="button"
                aria-label="Close expanded screenshot"
                onClick={closeExpandedView}
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <div className={styles.lightboxImage}>
              <Image
                key={`expanded-${selected.src}`}
                src={selected.src}
                alt={selected.title}
                fill
                sizes="96vw"
              />
            </div>
            <div className={styles.lightboxFooter}>
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={() => selectScreenshot(selectedIndex - 1)}
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <p>{selected.detail}</p>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={() => selectScreenshot(selectedIndex + 1)}
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
