async function fetchData() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
