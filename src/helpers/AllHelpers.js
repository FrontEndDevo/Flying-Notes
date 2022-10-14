// This helper function was created to send notes to firebase.
// Used in (AddNote) & (UserNotes) components.
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

// This func. to send request to firebase to create a new account.
// Used in Auth component.
export async function signInOrSignUp(userData, status) {
  let URL =
    status === "SIGN_UP"
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgK0riE4AkMyi7haeJjfDNq77fxm2jcVs"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgK0riE4AkMyi7haeJjfDNq77fxm2jcVs";

  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      email: userData.email,
      password: userData.password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    let errorMessage = "Creating the account was failed!";

    const errorData = await res.json();

    if (errorData && errorData.error && errorData.error.message) {
      errorMessage = errorData.error.message;
    }
    throw new Error(errorMessage);
  } else {
    const data = await res.json();
    return data;
  }
}
