import { z } from "zod";

export const PrayerTimesSchema = z.object({
    Day: z.string(),
    DayOfIslamicMonth: z.number(),
    DayOfMonth: z.number(),
    FajrStart: z.string().time(),
    FajrJamaah: z.string().time(),
    Sunrise: z.string().time(),
    DhuhrStart: z.string().time(),
    DhuhrJamaah: z.string().time(),
    AsrStart: z.string().time(),
    AsrJamaah: z.string().time(),
    MaghribJamaah: z.string().time(),
    IshaStart: z.string().time(),
    IshaJamaah: z.string().time()
}).array();

export type PrayerTimes = z.infer<typeof PrayerTimesSchema>;