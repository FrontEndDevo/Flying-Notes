export const sendNotesToFirebase = async (dataObj, selectedMethod) => {
  const response = await fetch(
    `https://notes-90ac8-default-rtdb.firebaseio.com/notes.json`,
    {
      method: selectedMethod,
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Saving note was failed!`);
  }
};
