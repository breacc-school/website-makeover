import { useState } from "react";
import { GraduationCap, Users } from "lucide-react";
import katiaPhoto from "@/assets/equipe/katia.jpeg";
import glaysonPhoto from "@/assets/equipe/glayson.jpeg";
import catiaPhoto from "@/assets/equipe/catia.png";
import michelePhoto from "@/assets/equipe/michele.jpeg";
import ritaPhoto from "@/assets/equipe/rita.jpg";

const committee = [
  {
    name: "Katia Fonseca",
    role: "Chairperson (Trustee)",
    photo: katiaPhoto,
    bio: "Natural de São Paulo, Brasil, é graduada em Artes Cênicas e Educação Artística. Residente em Londres há mais de duas décadas, envolveu-se com Português como Língua de Herança para transmitir aos filhos a cultura e a língua portuguesa. Trabalhou no BREACC como professora por mais de dez anos, coordenadora de eventos e representante dos professores. Desde 2018 é Presidente/Trustee do BREACC. Já palestrou em eventos de PLH no Arizona, Orlando e Dubai, e integra diretorias ligadas ao POLH no Reino Unido.",
  },
  {
    name: "Glayson",
    role: "Secretário (Trustee)",
    photo: glaysonPhoto,
    bio: "Formado em Letras (Português, Inglês e Literaturas) pela Unileste MG. Professor de Português na Universidade de Kingston desde 2014. Atuou no BREACC de 2009 a 2020 como professor de Português como Língua de Herança para crianças de 7 a 13 anos. Tornou-se Secretário/Trustee em 2018. Pai de duas filhas no BREACC.",
  },
  {
    name: "Aracele Danize De Luca",
    role: "Treasurer (Trustee)",
    photo: null,
    bio: "Formada em Administração em Comércio Exterior com pós-graduação em Gestão Financeira, além de estudos em Accounting and Management em Londres. Mãe de dois filhos no BREACC. Faz parte da família BREACC desde 2019 e iniciou o trabalho voluntário como Trustee e tesoureira em 2021.",
  },
  {
    name: "Geovanna Celani",
    role: "Trustee",
    photo: null,
    bio: "Parte do BREACC desde 2010 e integrante do comitê como Trustee. Compartilha que viu a filha crescer no projeto e construiu grandes amizades ao longo dos anos. Atua profissionalmente na área de aviação e aplica sua experiência de organização e gestão no trabalho voluntário.",
  },
  {
    name: "Catia",
    role: "Comitê BREACC",
    photo: catiaPhoto,
    bio: "Formada em Turismo pela USP e mestre em Empreendedorismo e Inovação de Negócios pela Universidade de Bournemouth. Em 2015, junto com outros pais, iniciou o projeto do BREACC em Bournemouth para fortalecer a cultura brasileira para os filhos. Contribui com organização de eventos, coordenação de atividades e estudos sobre terceira cultura e língua de herança.",
  },
  {
    name: "Michele",
    role: "Admin",
    photo: michelePhoto,
    bio: "Formada em Jornalismo pela Universidade Metropolitana de Londrina e empreendedora na área de transfers e city tours. Mãe de dois filhos no BREACC. Tornou-se voluntária após participar de uma Festa Junina e hoje atua como Auxiliar Administrativa, contribuindo há anos com organização, acolhimento e suporte ao projeto.",
  },
  {
    name: "Rita Dorneles",
    role: "Coordenadora Pedagógica",
    photo: ritaPhoto,
    bio: "Licenciada em Pedagogia com habilitações em Magistério e Orientação Educacional, com trajetória em formação docente e didática de línguas. Professora de POLH desde 2012 e atuante em workshops internacionais da área. Mantém uma relação de longa data com o BREACC e coordena o trabalho pedagógico com foco em aprendizagem significativa e identidade linguística.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const Equipe = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const isExpanded = (name: string) => !!expanded[name];

  const toggleExpanded = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Time BREACC
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Conheça o comitê
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map((member) => {
              const open = isExpanded(member.name);

              return (
                <article
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-3/4 aspect-[4/5] rounded-xl object-cover object-top bg-muted"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-3/4 aspect-[4/5] rounded-xl bg-primary/10 text-primary flex items-center justify-center text-4xl font-bold">
                        {initials(member.name)}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>

                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      {open ? member.bio : `${member.bio.slice(0, 165)}...`}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleExpanded(member.name)}
                      className="mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {open ? "Mostrar menos" : "Ler descrição completa"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-2 text-primary mb-3">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Em Breve</span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça os professores - TBC
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Esta seção será atualizada em breve com os perfis dos professores e assistentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipe;
