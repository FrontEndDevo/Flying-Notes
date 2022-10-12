export const sendNotesToFirebase = async (dataArr, selectedMethod) => {
  const response = await fetch(
    `https://notes-90ac8-default-rtdb.firebaseio.com/notes.json`,
    {
      method: selectedMethod, // only POST or PUT in this app
      body: JSON.stringify(dataArr),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Saving note was failed!`);
  }
};
