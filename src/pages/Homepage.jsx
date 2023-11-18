import React from "react";
import { Header } from "../Components/Header";
import ParentItem from "./parent";
import Circle from "./Circle";
export const HomePage = () => (
  <React.Fragment>
    <Header />
    <Circle/>
    <ParentItem>
    <main>
      This is me as main
      <aside>This is me as Aside</aside>
      <section>This is me as Section</section>
      <article>This is me as Article</article>
    
    </main>
    
    </ParentItem>
    <footer style={{ backgroundColor: "lightcoral", margin: "10px" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit quis
      debitis voluptatem nihil delectus! Ratione incidunt qui nostrum nulla
      maxime sint! Maiores fugit earum laborum dicta? Dolores, veniam qui.
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        src="https://vitejs.dev/logo.svg"
      />
    </footer>
  </React.Fragment>
);
