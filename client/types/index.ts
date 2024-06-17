import { z } from "zod";

export const PrayerTimesSchema = z.object({
    Day: z.string(),
    DayOfIslamicMonth: z.number(),
    DayOfMonth: z.number(),
    FajrStart: z.string(),
    FajrJamaah: z.string(),
    Sunrise: z.string(),
    DhuhrStart: z.string(),
    DhuhrJamaah: z.string(),
    AsrStart: z.string(),
    AsrJamaah: z.string(),
    MaghribJamaah: z.string(),
    IshaStart: z.string(),
    IshaJamaah: z.string()
}).array();

export type PrayerTimes = z.infer<typeof PrayerTimesSchema>;