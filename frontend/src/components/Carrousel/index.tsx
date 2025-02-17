"use client";
import { Section } from "./style";
import { useEffect, useState } from "react";
const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [posts, setPosts] = useState<
    {
      id: number;
      title: { rendered: string };
      date: string;
      excerpt: { rendered: string };
      featured_media_url: string;
      author_avatar_url: string;
      author_name: string;
      link: string;
    }[]
  >([]);

  const totalItems = posts.length;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://devblog.insanydesign.com/wp-json/wp/v2/posts/"
        );
        const data = await response.json();

        const postsWithDetails = await Promise.all(
          data.map(async (post: any) => {
            let featured_media_url = "defaultPostImage.png";
            if (post.featured_media) {
              try {
                const mediaResponse = await fetch(
                  `https://devblog.insanydesign.com/wp-json/wp/v2/media/${post.featured_media}`
                );
                const mediaData = await mediaResponse.json();
                featured_media_url = mediaData.source_url || featured_media_url;
              } catch (error) {
                console.error("Erro ao buscar imagem:", error);
              }
            }

            let author_avatar_url;
            let author_name = "Desconhecido";
            if (post.author) {
              try {
                const authorResponse = await fetch(
                  `https://devblog.insanydesign.com/wp-json/wp/v2/users/${post.author}`
                );
                const authorData = await authorResponse.json();
                author_avatar_url =
                  authorData.avatar_urls?.["96"] || author_avatar_url;
                author_name = authorData.name || author_name;
              } catch (error) {
                console.error("Erro ao buscar autor:", error);
              }
            }

            return {
              id: post.id,
              title: post.title,
              date: post.date,
              excerpt: post.excerpt,
              featured_media_url,
              author_avatar_url,
              author_name,
              link: post.link,
            };
          })
        );

        setPosts(postsWithDetails);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Section>
      <span className="textoPrincipal">
        <p>Nosso blog</p>
        <h1>Notícias do mundo da tecnologia</h1>
      </span>
      <div className="posts">
        <div className="setasNav">
          <span onClick={prevItem} className="antes">
            &lt;
          </span>
          <span onClick={nextItem} className="depois">
            &gt;
          </span>
        </div>

        <div className="postWrapper">
          <div
            className="postList"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {posts.map((post, index) => (
              <div key={post.id} className="flex-none w-72 h-full post">
                <a
                  href={`/posts/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={post.featured_media_url || "defaultPostImage.png"}
                    alt={`Post ${index + 1}`}
                    className="w-full h-64 object-cover "
                  />

                  <div className="py-4 ">
                    <h4 className="text-blue-600 font-bold">
                      {post.title.rendered}
                    </h4>
                    <p className="text-black">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-gray-700 mt-2 descPost">
                      {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") ||
                        "Descrição do post não disponível"}
                    </p>

                    {/* Avatar e nome do autor */}
                    <div className="flex items-center mt-4">
                      <img
                        src={post.author_avatar_url || "postAvatar.png"}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                      />
                      <div className="ml-3">
                        <p className="text-black font-semibold">
                          {post.author_name}
                        </p>
                        <p className="text-sm text-gray-600">Autor</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Carrousel;
