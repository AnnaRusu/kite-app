export const fetchData = async (URL) => {
  return await fetch(URL)
    .then((response) => response.json())
    .then((json) => json);
};

export const postData = async (URL, data) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteData = async (URL,id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};
