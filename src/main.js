const select = document.querySelector("#sw-select");

select.addEventListener("change", async (event) => {
  const category = event.target.value;
  if (!category) return;

  const resp = await fetch(`https://swapi.info/api/${category}/`);

  if (!resp.ok) {
    console.error(`Failed: ${resp.status}`);
    return;
  }

  const data = await resp.json();
  console.info(data);
});
