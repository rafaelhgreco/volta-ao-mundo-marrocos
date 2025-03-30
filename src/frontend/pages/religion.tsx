import { Body } from "../components/body/body";
import { NewsArticle } from "../components/article/article";

export function ReligionPage() {
    const articles = [
        {
            id: 1,
            title: "O Coração Espiritual de Marrocos",
            excerpt:
                "O Islã é a religião oficial do país, seguida pela grande maioria dos marroquinos, que praticam uma forma tolerante e aberta da fé islâmica, baseada na escola Maliki e no sufismo. Além disso, Marrocos é conhecido por sua rica tradição judaica, que remonta a séculos, e por sua comunidade cristã, que tem crescido nos últimos anos.",
            date: "2025-03-29",
            category: "Religião",
            imageUrl:
                "https://viajarmarrocostours.com/wp-content/uploads/2023/07/islao.jpeg",
        },
        {
            id: 2,
            title: "O Rei Mohammed VI",
            excerpt:
                "Sua Majestade Mohammed VI, desde sua ascensão ao trono em 1999, tem sido um símbolo de modernização, desenvolvimento e justiça social. Ele é o líder espiritual e político do país, e é reverenciado por seu compromisso com a paz, a tolerância e o diálogo inter-religioso.",
            date: "2025-03-27",
            category: "Política",
        },
        {
            id: 3,
            title: "Um País Guiado por Fé e Visão",
            excerpt:
                "Entre tradição e inovação, Marrocos se consolida como um destino onde a religião pacífica e a liderança sábia criam um ambiente único para moradores e visitantes. Seja explorando os mistérios das medinas, participando de um festival sagrado ou admirando as obras do rei, você sentirá a alma generosa e acolhedora deste reino. 🇲🇦 Viva a experiência marroquina – onde a fé, a cultura e o progresso se encontram!",
            date: "2025-03-27",
            category: "Religião",
        },
        // Adicione mais artigos conforme necessário
    ];
    return (
        <Body
            featuredArticle={
                <NewsArticle
                    isFeatured
                    title={articles[0].title}
                    excerpt={articles[0].excerpt}
                    date={articles[0].date}
                    category={articles[0].category}
                    imageUrl={articles[0].imageUrl}
                />
            }
        >
            {articles.slice(1).map((article) => (
                <NewsArticle
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    date={article.date}
                    category={article.category}
                    imageUrl={article.imageUrl}
                />
            ))}
        </Body>
    );
}
