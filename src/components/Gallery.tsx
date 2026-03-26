import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const imageModules = import.meta.glob<{ default: string }>(
  "/src/assets/gallery/**/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}",
  { eager: true }
);

// Parses a date from folder names ending in " - YYYY", " - YYYY-MM" or " - YYYY-MM-DD".
// Albums without a date get a timestamp of 0 and sort to the bottom.
function parseFolderDate(name: string): number {
  const match = name.match(/\s*-\s*(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/);
  if (!match) return 0;
  const year = Number(match[1]);
  const month = Number(match[2] ?? "1") - 1;
  const day = Number(match[3] ?? "1");
  return new Date(year, month, day).getTime();
}

// Strips the trailing " - {date}" from the folder name for display.
function displayName(name: string): string {
  return name.replace(/\s*-\s*\d{4}(?:-\d{2}(?:-\d{2})?)?$/, "").trim();
}

// Extracts just the year (or full date) for the subtitle badge.
function dateLabel(name: string): string | null {
  const match = name.match(/(\d{4}(?:-\d{2}(?:-\d{2})?)?)$/);
  return match ? match[1] : null;
}

type Album = { folderName: string; label: string; date: string | null; images: string[] };

function buildAlbums(): Album[] {
  const map: Record<string, string[]> = {};
  for (const [path, mod] of Object.entries(imageModules)) {
    const after = path.split("/gallery/")[1];
    if (!after) continue;
    const slashIdx = after.indexOf("/");
    if (slashIdx === -1) continue;
    const folderName = after.slice(0, slashIdx);
    if (!map[folderName]) map[folderName] = [];
    map[folderName].push(mod.default);
  }
  return Object.entries(map)
    .sort(([a], [b]) => {
      const diff = parseFolderDate(b) - parseFolderDate(a); // newest first
      if (diff !== 0) return diff;
      return a.localeCompare(b); // alphabetical tiebreak
    })
    .map(([folderName, images]) => ({
      folderName,
      label: displayName(folderName),
      date: dateLabel(folderName),
      images,
    }));
}

const albums = buildAlbums();

const Gallery = () => {
  const [openAlbums, setOpenAlbums] = useState<Record<string, boolean>>({});
  const [lightbox, setLightbox] = useState<{ aIdx: number; iIdx: number } | null>(null);

  const toggleAlbum = (folderName: string) =>
    setOpenAlbums((prev) => ({ ...prev, [folderName]: !prev[folderName] }));

  const current = lightbox !== null ? albums[lightbox.aIdx].images[lightbox.iIdx] : null;
  const total = lightbox !== null ? albums[lightbox.aIdx].images.length : 0;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightbox((lb) => {
          if (!lb) return null;
          const len = albums[lb.aIdx].images.length;
          return { ...lb, iIdx: (lb.iIdx - 1 + len) % len };
        });
      } else if (e.key === "ArrowRight") {
        setLightbox((lb) => {
          if (!lb) return null;
          const len = albums[lb.aIdx].images.length;
          return { ...lb, iIdx: (lb.iIdx + 1) % len };
        });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (albums.length === 0) {
    return (
      <section className="py-24 bg-background">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Galeria</h2>
          <p className="text-muted-foreground">
            Nenhum álbum encontrado. Crie uma pasta em{" "}
            <code className="bg-muted px-1 rounded text-sm">src/assets/gallery/</code>{" "}
            com o nome do evento e adicione as fotos dentro.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galeria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Momentos especiais do BREACC em fotos.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border border border-border rounded-xl overflow-hidden">
            {albums.map((album, aIdx) => {
              const isOpen = !!openAlbums[album.folderName];
              return (
                <div key={album.folderName}>
                  <button
                    onClick={() => toggleAlbum(album.folderName)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-heading text-xl font-bold text-foreground">
                        {album.label}
                      </span>
                      {album.date && (
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {album.date}
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground shrink-0 ml-4">
                      {album.images.length} foto{album.images.length !== 1 ? "s" : ""}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-background">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {album.images.map((src, iIdx) => (
                          <button
                            key={iIdx}
                            onClick={() => setLightbox({ aIdx, iIdx })}
                            className="aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <img
                              src={src}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-5xl border-0 bg-black/95 p-6">
          <DialogTitle className="sr-only">Visualizar foto</DialogTitle>
          <div className="relative flex items-center justify-center">
            {current && (
              <img
                src={current}
                alt=""
                className="max-h-[80vh] max-w-full object-contain rounded"
              />
            )}
            {total > 1 && (
              <>
                <button
                  onClick={() =>
                    setLightbox((lb) => {
                      if (!lb) return null;
                      const len = albums[lb.aIdx].images.length;
                      return { ...lb, iIdx: (lb.iIdx - 1 + len) % len };
                    })
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() =>
                    setLightbox((lb) => {
                      if (!lb) return null;
                      const len = albums[lb.aIdx].images.length;
                      return { ...lb, iIdx: (lb.iIdx + 1) % len };
                    })
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
          {lightbox !== null && total > 1 && (
            <p className="text-center text-white/50 text-sm mt-3">
              {lightbox.iIdx + 1} / {total}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
