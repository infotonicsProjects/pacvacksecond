import { url } from "../Environment/index";
import { cookies } from "next/headers";
export async function getUserData(endpoint) {
  const cookieStore = cookies();
  if (cookieStore.get("packM")) {
    var token = cookieStore.get("packM").value;
  }
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(`${url}${endpoint}`, requestOptions, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return ["Some error is occured"];
    } else {
      return res.json();
    }
  } catch (err) {
    console.log(err.message);
    return ["Some error occured"];
  }
}
