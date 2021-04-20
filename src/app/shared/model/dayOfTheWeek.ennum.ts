export enum DayOfTheWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

export const FileType2LabelMapping: Record<DayOfTheWeek, string> = {
    [DayOfTheWeek.Monday]: "Monday",
    [DayOfTheWeek.Tuesday]: "Tuesday",
    [DayOfTheWeek.Wednesday]: "Wednesday",
    [DayOfTheWeek.Thursday]: "Thursday",
    [DayOfTheWeek.Friday]: "Friday",
    [DayOfTheWeek.Saturday]: "Saturday",
    [DayOfTheWeek.Sunday]: "Sunday",
};