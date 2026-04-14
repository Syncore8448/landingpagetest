"use client";
import { useState, useEffect } from "react";
import styles from "./BriefModule.module.css";

export default function BriefModule() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Dopasuj wdrożenie Apilo do swojego biznesu
      </h2>
      <p className={styles.subtitle}>
        Odpowiedz na kilka pytań — przygotujemy plan wdrożenia
      </p>

      <button onClick={() => setOpen(true)} className={styles.cta}>
        Wypełnij formularz
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </section>
  );
}

function Modal({ onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});

  const steps = [
    {
      question: "Jak nazywa się Twoja firma?",
      field: "company",
      type: "input",
    },
    {
      question: "Ile zamówień miesięcznie obsługujesz?",
      field: "orders",
      type: "options",
      options: ["0-100", "100-1000", "1000+"],
    },
    {
      question: "Gdzie sprzedajesz?",
      field: "channels",
      type: "multi",
      options: ["Allegro", "Shopify", "WooCommerce", "Amazon"],
    },
    {
      question: "Co chcesz zautomatyzować?",
      field: "automation",
      type: "multi",
      options: [
        "Faktury",
        "Etykiety",
        "Statusy",
        "Powiadomienia",
      ],
    },
    {
      question: "Jaki jest Twój główny cel?",
      field: "goal",
      type: "textarea",
    },
    {
      question: "Podaj email kontaktowy",
      field: "email",
      type: "input",
    },
  ];

  const current = steps[step];

  const update = (value) => {
    setForm((prev) => ({ ...prev, [current.field]: value }));
  };

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      console.log(form);
      onClose();
    }
  };

  const prev = () => step > 0 && setStep(step - 1);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>✕</button>

        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.question}>{current.question}</h3>

          {current.type === "input" && (
            <input
              className={styles.input}
              onChange={(e) => update(e.target.value)}
              autoFocus
            />
          )}

          {current.type === "textarea" && (
            <textarea
              className={styles.input}
              onChange={(e) => update(e.target.value)}
            />
          )}

          {current.type === "options" && (
            <div className={styles.grid}>
              {current.options.map((opt) => (
                <div
                  key={opt}
                  className={styles.card}
                  onClick={() => {
                    update(opt);
                    next();
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}

          {current.type === "multi" && (
            <div className={styles.grid}>
              {current.options.map((opt) => (
                <div
                  key={opt}
                  className={styles.card}
                  onClick={() => {
                    const arr = form[current.field] || [];
                    update(arr.includes(opt)
                      ? arr.filter((i) => i !== opt)
                      : [...arr, opt]
                    );
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}

          <div className={styles.nav}>
            {step > 0 && (
              <button onClick={prev} className={styles.back}>
                Wstecz
              </button>
            )}

            {current.type !== "options" && (
              <button onClick={next} className={styles.next}>
                Dalej
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
