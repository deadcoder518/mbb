import { PrayerTimes, PrayerTimesSchema } from "../types";

export const getPrayerTimes = async () : Promise<PrayerTimes> => {
    const response = await fetch(`${process.env.EXPO_PUBLIC_SERVER_URL}/GetPrayerTimes`);
    const json = await response.json();
    return PrayerTimesSchema.parse(json);
}