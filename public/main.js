const getDataFromBackend = async () => {
    const rest = await fetch("http://localhost:8000/users");
    const data = await rest.json();
    return data;
  };
  
  // Note that top-level await is only available in modern browsers
  // https://caniuse.com/mdn-javascript_operators_await_top_level
  /* const res = await getDataFromBackend();
  console.log(res); */

/*   var cologne = false;

  function wohntKoeln(value) {
      let result;
      if (value) {
        result = 'Wohnt in Köln';
      } else {
        result = 'Wohnt nicht in Köln';
      }
      return result;
    } */33
    /* wohntKoeln(data.value.result)
 */   

// Add data to HTML
const addData = async () => {
  const data = await getDataFromBackend();

  data.forEach((value) => {
    const div = document.createElement("div");
    div.classList.add("userContainer");
    div.innerHTML = `
        <h3>${value.name}</h3>
        <p>${value.role}</p>
        <p>${value.unit}</p> 
        
`;
    container.append(div);
  });
};

addData();