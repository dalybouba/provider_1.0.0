

export class Provider {
    public contacts: {
        type: String;
        address: {
            street_adress: String;
            subdivision: String;
            postal_code: String;
            locality: String;
            country: String;
        },
        email: String;
        mobile_phone_number: String;
    }
    public opening_days_hours: {
        day_of_week: {
            day_of_week: String;
            hour_periods: String;
        },
        hour_periods: String;
    }
    public service: String;
    public is_auto_assignable: Boolean;
    public rating: String;
}