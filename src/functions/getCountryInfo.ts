import { Result } from "../types/Result";

export default async function getCountryInfo(
  ip: string,
  apiKey: string
): Promise<Result> {
  const url = "https://geo.ipify.org/api/v2/country,city";
  const fullUrl = `${url}?apiKey=${apiKey}&ipAddress=${ip}`;
  try {
    const response = await fetch(fullUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const result: Result = {
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region}, ${data.location.country}`,
        timezone: data.location.timezone,
        isp: data.isp,
      };
      return result;
    } else {
      const error = {
        status: response.status,
        message: response.statusText,
      };
      console.log(error);
      const result: Result = {
        ip: "Try Another IP",
        location: "Cannot Find Location",
        timezone: "Can not Find the Timezone",
        isp: "Not Found",
      };
      return result;
    }
  } catch (error) {
    console.log(error);
    const result: Result = {
      ip: "Try Another IP",
      location: "Cannot Find Location",
      timezone: "Cannot Find the Timezone",
      isp: "Not Found",
    };
    return result;
  }
}
