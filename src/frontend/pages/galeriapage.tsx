export const GaleriaPage = () => {
    const fotos = [
        {
            id: 1,
            imageUrl:
                "https://media.istockphoto.com/id/2158890401/pt/foto/experience-the-stunning-sunset-over-a-berber-village-in-dades-valley-tinghir-morocco.jpg?s=612x612&w=0&k=20&c=hvgruaFOmSYbkE4c71Pu9VWauwHpi5RzecjIyaCkwB0=",
            titulo: "Paisagem Natural",
            descricao: "Vista deslumbrante das montanhas ao pôr do sol",
        },
        {
            id: 2,
            imageUrl:
                "https://images.adsttc.com/media/images/5bc6/4c93/f197/cc6b/2200/0008/newsletter/5.jpg?1539722384",
            titulo: "Arquitetura Urbana",
            descricao: "Arranha-céus modernos no centro da cidade",
        },
        {
            id: 3,
            imageUrl:
                "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/beaches/morocco-beaches/marocco-spiagge_m.jpg.image.694.390.low.jpg",
            titulo: "Praia Exótica",
            descricao: "Legzira",
        },
        {
            id: 4,
            imageUrl:
                "https://d33y0z4ooepzrm.cloudfront.net/images/9f92428492c94795d863f30ac8643791bec990ea/fullscreen/9f92428492c94795d863f30ac8643791bec990ea.jpg",
            titulo: "Retrato Artístico",
            descricao: "Sultão de Marrocos",
        },
        {
            id: 5,
            imageUrl:
                "https://ecommerce.cdn.genera.com.br/uploads/2023/01/Culinaria-Marrocos-4.jpg",
            titulo: "Gastronomia",
            descricao:
                "Pastilla - Ela é uma torta recheada normalmente com frango",
        },
        {
            id: 6,
            imageUrl:
                "https://www.brasil247.com/_next/image?url=https%3A%2F%2Fcdn.brasil247.com%2Fpb-b247gcp%2Fswp%2Fjtjeq9%2Fmedia%2F20250226080248_01d3af115cdb7a1440cb5ca108a16fbaccfe19f804793a30e99c30dcd7b47813.webp&w=1920&q=75",
            titulo: "Aventura",
            descricao: "Pessoas andando de camelo no deserto",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
                    Galeria de Fotos
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fotos.map((foto) => (
                        <div
                            key={foto.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={foto.imageUrl}
                                alt={foto.titulo}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {foto.titulo}
                                </h2>
                                <p className="text-gray-600">
                                    {foto.descricao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Voltar para Home
                    </a>
                </div>
            </div>
        </div>
    );
};
