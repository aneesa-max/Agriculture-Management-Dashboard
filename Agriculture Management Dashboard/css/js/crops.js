const table = document.getElementById("cropTable");
const cropCount = document.getElementById("cropCount");

function renderCrops(data = crops) {
  table.innerHTML = "";
  data.forEach((crop, index) => {
    table.innerHTML += `
      <tr>
        <td>${crop.name}</td>
        <td>${crop.season}</td>
        <td>${crop.yield}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editCrop(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteCrop(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
  cropCount.textContent = crops.length;
}

function deleteCrop(index) {
  crops.splice(index, 1);
  renderCrops();
}

function editCrop(index) {
  document.getElementById("cropIndex").value = index;
  document.getElementById("cropName").value = crops[index].name;
  document.getElementById("cropSeason").value = crops[index].season;
  document.getElementById("cropYield").value = crops[index].yield;
}

document.getElementById("cropForm").addEventListener("submit", e => {
  e.preventDefault();

  const index = document.getElementById("cropIndex").value;
  const crop = {
    name: cropName.value,
    season: cropSeason.value,
    yield: cropYield.value
  };

  if (index === "") crops.push(crop);
  else crops[index] = crop;

  e.target.reset();
  renderCrops();
});

document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = crops.filter(c => c.name.toLowerCase().includes(value));
  renderCrops(filtered);
});

renderCrops();
