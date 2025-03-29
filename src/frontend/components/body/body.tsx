import { ReactNode } from "react";

interface BodyProps {
    children: ReactNode;
    featuredArticle?: ReactNode;
}

export const Body = ({ children, featuredArticle }: BodyProps) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-4">
                {featuredArticle && (
                    <section className="mb-8">{featuredArticle}</section>
                )}

                <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {children}
                </main>
            </div>
            <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
                © {new Date().getFullYear()} Projeto Volta ao Mundo - Rafael
                Henrique Greco
            </footer>
        </div>
    );
};
