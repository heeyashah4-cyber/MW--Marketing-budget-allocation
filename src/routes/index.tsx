import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type MouseEvent } from "react";
import markup from "../optimizer/markup.html?raw";

export const Route = createFileRoute("/")({
  component: Home,
});

function switchTab(tab: string) {
  document.querySelectorAll(".tabbtn").forEach((b) => {
    b.classList.toggle("active", (b as HTMLElement).dataset.tab === tab);
  });
  document.querySelectorAll(".panel").forEach((p) => {
    p.classList.toggle("active", p.id === `panel-${tab}`);
  });
  const panel = document.getElementById(`panel-${tab}`);
  if (tab === "overview") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    panel?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
}

function switchSubtab(sub: string) {
  document.querySelectorAll(".subtabbtn").forEach((b) => {
    b.classList.toggle("active", (b as HTMLElement).dataset.sub === sub);
  });
  document.querySelectorAll(".subpanel").forEach((p) => {
    p.classList.toggle("active", p.id === `sub-${sub}`);
  });
  window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
}

function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let destroy: (() => void) | undefined;

    void import("../optimizer/boot.js")
      .then(({ initOptimizer, destroyOptimizerCharts }) => {
        if (cancelled) return;
        destroy = destroyOptimizerCharts;
        initOptimizer();
      })
      .catch((err) => {
        console.error("optimizer boot failed", err);
      });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  function onClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const tabBtn = target.closest<HTMLElement>(".tabbtn");
    if (tabBtn?.dataset.tab) {
      const radio = document.getElementById(`tab-${tabBtn.dataset.tab}`) as HTMLInputElement | null;
      if (radio) radio.checked = true;
      switchTab(tabBtn.dataset.tab);
      return;
    }

    const subBtn = target.closest<HTMLElement>(".subtabbtn");
    if (subBtn?.dataset.sub) {
      event.preventDefault();
      switchSubtab(subBtn.dataset.sub);
    }
  }

  return (
    <div className="optimizer-root" onClick={onClick}>
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
