import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    q: "As crianças de 2 e 3 anos ficam sozinhas na sala de aula?",
    a: "Não, a classe do Jardim conta com a participação ativa dos pais.",
  },
  {
    q: "Os pais têm que ficar na escola?",
    a: "Sim, os pais devem ficar na escola e podem esperar na cantina.",
  },
  {
    q: "Os alunos precisam levar lanche para a escola?",
    a: "Sim, a lancheira deverá estar devidamente identificada. Importante: a escola é Nut FREE.",
  },
  {
    q: "A escola tem estacionamento?",
    a: "Sim, mas é importante chegar cedo para evitar desagrados.",
  },
  {
    q: "O BREACC prepara os alunos para o GCSE?",
    a: "Sim. O BREACC oferece aos adolescentes apoio para se prepararem para as provas do GCSE em língua portuguesa de forma lúdica e divertida, com simulados de reading, speaking e writing.",
  },
  {
    q: "Quais os dias das aulas?",
    a: "Sábados das 10:30 às 12:30. Nosso calendário funciona de acordo com o calendário britânico.",
  },
  {
    q: "Quais as idades das crianças?",
    a: "De dois anos e meio aos 15 anos completos.",
  },
  {
    q: "Que tipo de instituição é o BREACC?",
    a: "O BREACC é uma instituição sem fins lucrativos — Charity registrada no Reino Unido.",
  },
  {
    q: "É possível fazer uma aula experimental?",
    a: "Sim. Oferecemos um open day por trimestre, sábado das 10h30 às 11h30.",
  },
  {
    q: "A criança precisa falar e entender português?",
    a: "Não é requisito obrigatório, embora a compreensão da língua, ainda que pequena, seja um bônus.",
  },
  {
    q: "De que forma as turmas são divididas?",
    a: "De acordo com a idade, perfil e série escolar da criança.",
  },
  {
    q: "Quando posso matricular minha(s) criança(s)?",
    a: "O BREACC aceita matrículas o ano todo, desde que haja vagas disponíveis. Entre em contato por email: info@breacc.com.",
  },
  {
    q: "Quais são os valores e formas de pagamento?",
    a: "Matrícula: £20 por família. Twickenham: 12× £54.50/mês. Bournemouth: 12× £38.50/mês. Famílias com mais de uma criança têm desconto. Pagamento por direct debit.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tudo o que você precisa saber sobre o BREACC.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;