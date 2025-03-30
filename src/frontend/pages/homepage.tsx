import { Body } from "../components/body/body";
import { NewsArticle } from "../components/article/article";

export function HomePage() {
    const articles = [
        {
            id: 1,
            title: "Marrocos: Um Reino de Beleza, Cultura e Qualidade de Vida",
            excerpt:
                "Bem-vindo ao Marrocos, um país onde a tradição e a modernidade se encontram, criando um destino único no Norte da África. Com uma rica herança cultural, paisagens deslumbrantes e uma qualidade de vida encantadora, Marrocos é um lugar que cativa corações e mentes.",
            date: "2025-03-29",
            category: "Cultura",
            imageUrl:
                "https://www.remessaonline.com.br/blog/wp-content/uploads/2023/08/marrocos.jpg.webp",
        },
        {
            id: 2,
            title: "Um Mosaico de Comunicação",
            excerpt:
                "Marrocos é um país multilíngue, onde o árabe marroquino (Darija) e o tamazight (berbere) são as línguas nacionais, enquanto o francês é amplamente utilizado nos negócios e na educação. O espanhol também é falado em algumas regiões, e o inglês vem ganhando popularidade entre as novas gerações. Essa diversidade linguística reflete a história e a abertura do povo marroquino ao mundo.",
            date: "2025-03-27",
            category: "Língua",
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
