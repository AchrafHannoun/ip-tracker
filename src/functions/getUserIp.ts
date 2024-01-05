export default async function getUserIp(): Promise<string> {
  const url = "https://api.ipify.org";
  const response = await fetch(url);
  const data = await response.text();
  return data;
}
