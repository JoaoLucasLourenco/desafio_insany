import About from "@/components/About";
import Hero from "../components/HeroSection";
import ListItems, { ListItemsInterface } from "../components/ListItems";

function Home() {
  const items: ListItemsInterface[] = [
    { title: "Fim da complexidade", imageUrl: "listIcon1.svg" },
    { title: "Sem burocracia", imageUrl: "listIcon2.svg" },
    { title: "Tudo digital ", imageUrl: "listIcon3.svg" },
    { title: "Evolução constante", imageUrl: "listIcon4.svg" },
  ];
  return (
    <main>
      <Hero />
      <About />
      <ListItems items={items}></ListItems>
    </main>
  );
}

export default Home;
