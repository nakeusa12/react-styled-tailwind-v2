import { FigureArea, Caption } from "./styled";

function App() {
  return (
    <>
      <FigureArea>
        <img
          src="https://images.unsplash.com/photo-1605882073608-161451a3555b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          alt=""
          width="384"
          height="512"
        />
        <div class="card-body">
          <blockquote>
            <p class="title-card">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <Caption>
            <div class="name-card">Sarah Dayan</div>
            <div class="desc-card">Staff Engineer, Algolia</div>
          </Caption>
          <p className="text-gray-600">
            By{" "}
            <a href="https://sfullnakeusa.netlify.app/" className="text-white">
              Saiful Nakeusa
            </a>
          </p>
        </div>
      </FigureArea>
    </>
  );
}

export default App;
