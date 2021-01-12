import publicIp from "public-ip";
import iplocation from "iplocation";


export const UserLocation = async (): Promise<string> => {
  // get public ip
  const publicIpStr = await publicIp.v4();
  // get location object
  const locationObj = await iplocation(publicIpStr);
  // Use and return a part of the location object
  const flexibleLocationObject: Partial<any> = { ...locationObj };
  const { city, country } = flexibleLocationObject;
  const location = `${city}, ${country.name}`;

  return location;
};
