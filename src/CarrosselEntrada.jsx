import { useEffect, useState } from "react";
import styles from "./historia.module.css";

export default function CarrosselEntrada({
  imagens,
  rotulo = "REGISTROS DA HISTÓRIA",
  ariaLabel = "Fotografias históricas",
  className = "",
}) {
  const [ativa, setAtiva] = useState(0);
  const [pausado, setPausado] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [mouseSobre, setMouseSobre] = useState(false);

  useEffect(() => {
    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const atualizar = () => { if (preferencia.matches) setPausado(true); };
    preferencia.addEventListener("change", atualizar);
    return () => preferencia.removeEventListener("change", atualizar);
  }, []);

  useEffect(() => {
    if (pausado || mouseSobre || imagens.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setAtiva((valor) => (valor + 1) % imagens.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [pausado, mouseSobre, imagens.length]);

  const selecionar = (indice) => {
    setPausado(true);
    setAtiva((indice + imagens.length) % imagens.length);
  };

  return (
    <section
      className={`${styles.carrossel} ${className}`}
      aria-label={ariaLabel}
      aria-roledescription="carrossel"
      onMouseEnter={() => setMouseSobre(true)}
      onMouseLeave={() => setMouseSobre(false)}
      onFocusCapture={() => setPausado(true)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          selecionar(ativa + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div className={styles.carrosselTopo}>
        <span>{rotulo}</span>
        <span>{String(ativa + 1).padStart(2, "0")} / {String(imagens.length).padStart(2, "0")}</span>
      </div>
      <div className={styles.carrosselFotos} aria-live={pausado ? "polite" : "off"}>
        {imagens.map((imagem, indice) => (
          <figure
            key={imagem.id}
            className={`${styles.carrosselSlide} ${indice === ativa ? styles.carrosselAtivo : ""}`}
            aria-hidden={indice !== ativa}
            role="group"
            aria-roledescription="slide"
            aria-label={`${indice + 1} de ${imagens.length}: ${imagem.titulo}`}
          >
            <img src={imagem.imagem} alt={imagem.alt} decoding="async" fetchPriority={indice === 0 ? "high" : "auto"} />
            <figcaption>
              <strong>{imagem.titulo}</strong>
              <p>{imagem.legenda}</p>
              <a href={imagem.fonteUrl} target="_blank" rel="noopener noreferrer" tabIndex={indice === ativa ? 0 : -1}>{imagem.fonte}</a>
              <span> · {imagem.licencaUrl ? <a href={imagem.licencaUrl} target="_blank" rel="noopener noreferrer" tabIndex={indice === ativa ? 0 : -1}>{imagem.licenca}</a> : imagem.licenca}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.carrosselControles}>
        <button type="button" aria-label="Imagem anterior" onClick={() => selecionar(ativa - 1)}>←</button>
        <div className={styles.carrosselIndicadores}>
          {imagens.map((imagem, indice) => (
            <button key={imagem.id} type="button" aria-label={`Ver imagem ${indice + 1}: ${imagem.titulo}`} aria-current={indice === ativa ? "true" : undefined} onClick={() => selecionar(indice)}><span /></button>
          ))}
        </div>
        <button type="button" aria-label="Próxima imagem" onClick={() => selecionar(ativa + 1)}>→</button>
        <button className={styles.carrosselPausa} type="button" onClick={() => setPausado((valor) => !valor)}>{pausado ? "Reproduzir" : "Pausar"}</button>
      </div>
    </section>
  );
}