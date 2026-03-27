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
    bio: "Natural de São Paulo, Brasil, é graduada em Artes Cênicas e Educação Artística em São Paulo. Residente em Londres há 23 anos, após o nascimento do primeiro filho envolveu-se com o Português como Língua de Herança com a intenção de transmitir ao seu filho a cultura e a Lingua Portuguesa.. Ao longo dos anos vêm aperfeiçando-se participando de cursos e congressos. Trabalhou no BREACC como professora por mais de dez anos., coordenadora de eventos e representante dos professores. Desde 2018 é Presidente/Trustee do BREACC (Brazilian Educational and Cultural Centre), a escola de POLH mais antiga de UK.  Palestrou em eventos de PLH no Arizona, Orlando e Dubai, compartilhou  sua experiencia com o POLH no Reino Unido. E uma das diretoras do POLH UK, diretora do Focus Brasil UK, e desenvolve trabalhos  de arte terapia  com idosos. <br><br><em>\"Este projeto é muito importante para mim, poder transmitir minha maior herança aos meus filhos e outras famílias que estão tão longe de suas raízes, não tem preço\"</em>",
  },
  {
    name: "Glayson",
    role: "Secretário (Trustee)",
    photo: glaysonPhoto,
    bio: "Formado Licenciatura Plena em Letras – Português, Inglês e suas Literaturas - Unileste MG (Universidade do Leste de Minas Gerais) Professor de Português na Universidade de Kingston desde Set/2014 Trabalho no BREACC desde de Nov/2009 – Jul/2020 como Professor de Português como Língua de Herança para crianças entre 7 e 13 anos de idade. Em Janeiro de 2018 me tornei Secretario/Trustee do BREACC. Pai de duas filhas no BREACC.",
  },
  {
    name: "Aracele Danize De Luca",
    role: "Financeiro (Trustee)",
    photo: null,
    bio: "Formada em Administração em Comércio Exterior e Pos Graduação em Gestão Financeira pela Universidade do Oeste de Santa Catarina, Accounting and Management ULSTER University London. Mãe de dois filhos no BREACC. Fazemos parte da família Breacc desde 2019. Iniciei meu trabalho voluntario no BREACC em 2021 como TRUSTEE a tesoureira. Fazer parte dessa escola tem contribuindo muito para o aprendizado e vivência dos meninos com a língua portuguesa, tendo o português como língua de herança e fazendo com que nossos filhos não aprendam somente sobre nossa língua mas sobre nossa cultura e costumes tornando-se algo precioso na vida deles.",
  },
  {
    name: "Geovanna Celani",
    role: "Eventos (Trustee)",
    photo: null,
    bio: "O Breacc faz parte da minha vida desde 2010 e sou uma Trustee e parte do comitê; Eu vi minha filha crescer no Breacc e nestes anos tive o privilégio de fazer grandes amizades. Eu trabalho na área de aviação a 25 anos e uso minha experiência de organização e gerenciamento como voluntária.",
  },
  {
    name: "Catia",
    role: "Trustee",
    photo: catiaPhoto,
    bio: "Meu nome é Catia, sou formada em Turismo pela Universidade de São Paulo e mestre em Empreendedorismo e Inovação de Negócios pela Universidade de Bournemouth. Em 2015, alguns pais e eu iniciamos o projeto do BREACC em Bournemouth, no intuito de propagar a cultura brasileira para os nossos filhos. Essa união de forças sempre foi o grande motivador para a continuidade do projeto, que hoje se tornou uma referência na cidade e arredores. Organizando eventos, coordenando atividades e a pesquisando sobre o fenômeno da terceira cultura e lingua de herança são algumas das maneiras que eu contribuo para o projeto.",
  },
  {
    name: "Michele",
    role: "Admin",
    photo: michelePhoto,
    bio: "Formada em Jornalismo pela Universidade metropolitana de Londrina e empreendedora da Empresa de Transfers e City. Mãe de dois filhos um de 9 anos e outro de 6 anos, ambos aprendendo a ler e escrever através das maravilhosas professoras do BREACC. Costumo dizer que Breacc foi amor a primeira VISITA. Participei de uma Festa Junina e amei o clima, a organização e a união do Time do BREACC. Matriculei meus filhos e me voluntariei para ajudar no projeto, desde então sou a Auxiliar Administrativa do BREACC há 5 anos – anos de aprendizado, de amor, carinho e muita paciência, onde aprendo e repasso minhas experiências.",
  },
  {
    name: "Rita Dorneles",
    role: "Coordenadora Pedagógica",
    photo: ritaPhoto,
    bio: "<ul><li>Escola Normal/Formação de Professores - Professora Primária-Colégio Lusocarioca/RJ</li><li>Licenciada em Pedagogia com habilitações em Magistério e Orientação Educacional- UNISUAM/RJ</li><li>Mestrado em Educação e Formação - ramo da Didática de Línguas na Universidade de Aveiro</li><li>Professora de POLH desde 2012 - De 2012 a 2017 - BREACC 2017 até o momento - Associação Raízes de Genebra</li><li>Workshops ministrados: Teoria do Fazer - Florença em 2016 e Dubai 2018 / Breacc- Kingston University em 2018 / Turmas Heterogenea - Associação Raízes (formação contibuada) em 2018 / Material Autêntico - Sorbonne em 2019</li></ul><p><em>Eu e o Breacc temos uma linda e longa história de amor. Foi onde conheci o POLH, onde aprendi que podemos aprender e ensinar mais que língua, foi onde tive a oportunidade de me tornar uma professora de POLH e agora, um novo desafio!</em></p>",
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

                    <div
                      className="text-muted-foreground text-sm leading-relaxed mt-3 whitespace-pre-line [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mt-2"
                      dangerouslySetInnerHTML={{ __html: open ? member.bio : `${member.bio.replace(/<[^>]*>/g, "").slice(0, 100)}...` }}
                    />

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
