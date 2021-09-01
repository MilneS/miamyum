const getAllComments = async (e) => {
const response = await fetch(process.env.REACT_APP_ADD_COMMENTS_API, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    return data
  }
};
export default getAllComments;
