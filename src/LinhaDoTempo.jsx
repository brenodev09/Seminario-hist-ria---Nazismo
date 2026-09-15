import { useEffect, useRef } from "react";
import styles from "./historia.module.css";

export default function LinhaDoTempo({ eventos }) {
  const trilha = useRef(null);

  useEffect(() => {
    let frame;
    const atualizar = () => {
      const elemento = trilha.current;
      if (!elemento) return;
      const caixa = elemento.getBoundingClientRect();
      const progresso = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - caixa.top) / caixa.height));
      elemento.style.setProperty("--progresso", progresso);
      frame = undefined;
    };
    const agendar = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.cronologia}>
      <div className={styles.timelineLimite}><span>1918</span> INÍCIO DO PERCURSO <span aria-hidden="true">↓</span></div>
      <ol className={styles.timeline} ref={trilha} aria-label="Acontecimentos de 1918 a 1945">
        {eventos.map(([ano, evento], index) => (
          <li className={styles.timelineItem} key={ano}>
            <span className={styles.timelineMarcador} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <article className={`${styles.timelineConteudo} ${styles.reveal}`}>
              <span className={styles.timelineEtapa}>{index < 4 ? "CONTEXTO E CRISE" : index < 8 ? "ASCENSÃO E DITADURA" : "GUERRA E QUEDA"}</span>
              <time dateTime={ano}>{ano}</time>
              <p>{evento}</p>
              <span className={styles.timelineSeta} aria-hidden="true">↓</span>
            </article>
          </li>
        ))}
      </ol>
      <div className={styles.timelineLimite}><span aria-hidden="true">↓</span> FIM DO REGIME <span>1945</span></div>
    </div>
  );
}
