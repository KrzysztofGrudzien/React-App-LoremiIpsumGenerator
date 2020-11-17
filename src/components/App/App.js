import React from "react";
import Form from "../Form/Form";
function App() {
  return (
    <main className="main">
      <section className="app">
        <h1 className="app__title">
          lorem ipsum <br />
          <strong>generator</strong>
        </h1>
        <article className="decoration">
          <h2 className="decoration__letter">L</h2>
          <p className="decoration__text">
            orem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            iusto itaque, beatae error hic quia, nemo earum dignissimos non nisi
            molestias! Autem nulla vitae quam veritatis deserunt? Quis,
            consequuntur minima. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Accusamus iusto itaque, beatae error hic quia,
            nemo earum dignissimos non nisi molestias! Autem nulla vitae quam
            veritatis deserunt? Quis, consequuntur minima.
          </p>
        </article>
        <Form />
        <footer className="app__footer">Created by Krzysztof Grudzień</footer>
      </section>
      <section className="data">
        <h2 className="data__title">
          You generated 3 paragraphs <span className="data__copy">copy</span>
        </h2>
        <p className="data__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          facilis earum voluptas blanditiis in, quaerat eius corporis eveniet
          ipsa unde quia id magni nostrum totam nam aut cupiditate. Porro,
          animi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          similique, nobis cumque cum et natus sit velit voluptatibus quae nisi
          error voluptatum. Reiciendis debitis ut harum perferendis ipsa ad
          adipisci.
        </p>
        <p className="data__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          facilis earum voluptas blanditiis in, quaerat eius corporis eveniet
          ipsa unde quia id magni nostrum totam nam aut cupiditate. Porro,
          animi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          similique, nobis cumque cum et natus sit velit voluptatibus quae nisi
          error voluptatum. Reiciendis debitis ut harum perferendis ipsa ad
          adipisci.
        </p>
        <p className="data__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          facilis earum voluptas blanditiis in, quaerat eius corporis eveniet
          ipsa unde quia id magni nostrum totam nam aut cupiditate. Porro,
          animi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          similique, nobis cumque cum et natus sit velit voluptatibus quae nisi
          error voluptatum. Reiciendis debitis ut harum perferendis ipsa ad
          adipisci.
        </p>
        {/* <h2 className="data__title hidden">Your page is empty!</h2> */}
      </section>
    </main>
  );
}

export default App;
