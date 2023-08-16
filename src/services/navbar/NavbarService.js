import HttpClient from "../../apis/HttpClient.js";

export async function getAlarm() {
  try {
    const res = await HttpClient.get("navbar/alarm/all");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
