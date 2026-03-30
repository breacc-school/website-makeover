import { Music } from "lucide-react";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();

  return (
    <section id="recursos" className="py-10 md:py-16 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-wider uppercase text-secondary mb-2">
            {t("resources.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground">
            {t("resources.title")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t("resources.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {t("resources.playlist_title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("resources.playlist_desc")}
                </p>
              </div>
            </div>
            <iframe
              className="rounded-lg w-full"
              src="https://open.spotify.com/embed/playlist/0yW8rxrS6ox6JqNxr5dh4r?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist Spotify BREACC"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
