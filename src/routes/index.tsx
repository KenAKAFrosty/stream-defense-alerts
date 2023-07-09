import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  useStylesScoped$(`
    main { 
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      justify-content: center;
    }
  `)
  return (
    <main>
      <h1>
        Stream Defense Alerts
      </h1>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Stream Defense Alerts",
  meta: [
    {
      name: "description",
      content: "Stream Defense Alerts",
    },
  ],
};
