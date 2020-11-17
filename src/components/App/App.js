import React from "react";

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
            consequuntur minima.
          </p>
        </article>
        <form className="form">
          <input type="number" min="0" />
          <select name="type">
            <option value="paragraphs">paragraphs</option>
            <option value="sentences">sentences</option>
            <option value="words">words</option>
          </select>
          <button type="submit">generate</button>
        </form>
        <footer className="app__footer">Created by Krzysztof Grudzień</footer>
      </section>
      <section className="data">
        <h2 className="data__title">
          You generated 3 paragraphs <div className="data__copy">copy</div>
        </h2>
        <p className="data__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          facilis earum voluptas blanditiis in, quaerat eius corporis eveniet
          ipsa unde quia id magni nostrum totam nam aut cupiditate. Porro,
          animi!
        </p>
        {/* <h2 className="data__title hidden">Your page is empty!</h2> */}
      </section>
    </main>
  );
}

export default App;
