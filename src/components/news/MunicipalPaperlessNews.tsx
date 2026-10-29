import {
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const digitalServices = [
  "Expediente electrónico.",
  "Firma digital.",
  "Seguridad y trazabilidad de procesos con tecnología Blockchain.",
  "Digitalización de documentación.",
  "Trámites online / sede electrónica.",
  "Administración de turnos para atención presencial.",
  "Pantallas publicitarias.",
  "Notificaciones electrónicas.",
  "Notificaciones a domicilio.",
  "Trabajos de campo con integración de imágenes, audio y geolocalización.",
  "Encuestas.",
  "Reclamos.",
  "Inspecciones.",
  "Órdenes de servicio.",
  "Automatización de procesos.",
  "Reingeniería de procesos.",
  "Analítica de datos, con estadística y BI.",
];

function MunicipalPaperlessNews() {
  const [
    isNewsOpen,
    setIsNewsOpen,
  ] = useState(true);

  const [
    isDetailsOpen,
    setIsDetailsOpen,
  ] = useState(false);

  useEffect(() => {
    if (
      !isNewsOpen &&
      !isDetailsOpen
    ) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key !==
        "Escape"
      ) {
        return;
      }

      if (isDetailsOpen) {
        setIsDetailsOpen(
          false,
        );

        return;
      }

      setIsNewsOpen(false);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isNewsOpen,
    isDetailsOpen,
  ]);

  const closeAll = () => {
    setIsDetailsOpen(false);
    setIsNewsOpen(false);
  };

  return (
    <>
      {isNewsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeAll();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ggmm-news-title"
            aria-describedby="ggmm-news-description"
            className="relative w-full max-w-[720px] overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
          >
            {/* Encabezado */}

            <div className="relative flex min-h-[92px] items-center justify-between overflow-hidden bg-[#1f252b] px-6 sm:px-8">
              <img
                src="/images/ggmmLogo.webp"
                alt="GGMM"
                width={700}
                height={303}
                className="h-[42px] w-auto object-contain brightness-0 invert"
              />

              <div className="pointer-events-none absolute -right-5 -top-16 h-44 w-44 rotate-[22deg] bg-[#23b9df]" />

              <button
                type="button"
                onClick={closeAll}
                aria-label="Cerrar noticia"
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1f252b] shadow-sm transition hover:bg-white"
              >
                <X size={23} />
              </button>
            </div>

            {/* Noticia */}

            <div className="bg-[#681027] px-6 py-8 text-white sm:px-10 sm:py-10">
              <p className="text-[10px] font-black tracking-[0.24em] text-white/55">
                NOVEDAD
              </p>

              <h2
                id="ggmm-news-title"
                className="mt-3 max-w-[580px] font-serif text-[2rem] font-black leading-[1.03] sm:text-[3rem]"
              >
                Despapelización municipal
              </h2>

              <p
                id="ggmm-news-description"
                className="mt-4 max-w-[600px] text-[15px] font-medium leading-7 text-white/88 sm:text-[20px] sm:leading-8"
              >
                ggmm cuenta con
                digitalización de
                expedientes y firma
                digital y electrónica.
              </p>
            </div>

            {/* Acción */}

            <div className="flex justify-end bg-white px-6 py-5 sm:px-8">
              <button
                type="button"
                onClick={() =>
                  setIsDetailsOpen(
                    true,
                  )
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#681027] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#681027]/20 transition hover:bg-[#80162d]"
              >
                Más información

                <ArrowRight
                  size={17}
                />
              </button>
            </div>
          </section>
        </div>
      )}

      {isDetailsOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/65 px-4 py-5 backdrop-blur-[3px]"
          role="presentation"
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsDetailsOpen(
                false,
              );
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ggmm-details-title"
            className="relative flex max-h-[90svh] w-full max-w-[940px] flex-col overflow-hidden rounded-[28px] border border-[#ded3c6] bg-[#fffaf5] shadow-[0_35px_100px_rgba(0,0,0,0.4)]"
          >
            {/* Cabecera */}

            <div className="flex shrink-0 items-start justify-between gap-5 border-b border-[#eaded2] bg-white px-6 py-5 sm:px-8 sm:py-6">
              <div>
                <p className="text-[9px] font-black tracking-[0.22em] text-[#8d1430]">
                  SEOLUCIONES ggmm
                </p>

                <h2
                  id="ggmm-details-title"
                  className="mt-2 font-serif text-[1.65rem] font-black leading-tight text-[#211a18] sm:text-[2.35rem]"
                >
                  Servicios de
                  digitalización,
                  firmas y reclamos
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setIsDetailsOpen(
                    false,
                  )
                }
                aria-label="Cerrar información"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3ebe5] text-[#681027] transition hover:bg-[#eadbd1]"
              >
                <X size={21} />
              </button>
            </div>

            {/* Contenido scrollable */}

            <div className="min-h-0 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-3 md:grid-cols-2 md:gap-x-7 md:gap-y-4">
                {digitalServices.map(
                  (service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 rounded-xl border border-[#eadfd6] bg-white px-4 py-3.5 shadow-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#8d1430]"
                      />

                      <p className="text-[13px] leading-5 text-[#403732] sm:text-sm sm:leading-6">
                        {service}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Pie */}

            <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#eaded2] bg-white px-6 py-4 sm:px-8">
              <p className="hidden text-xs text-[#7a6d65] sm:block">
                Gestión digital
                integral para
                gobiernos municipales.
              </p>

              <button
                type="button"
                onClick={closeAll}
                className="ml-auto rounded-xl bg-[#681027] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#80162d]"
              >
                Cerrar
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default MunicipalPaperlessNews;
