import { app, HttpRequest, HttpResponseInit, InvocationContext, input } from "@azure/functions";

const sqlInput = input.sql({
    commandText: `select * from dbo.${process.env.AzureSQLDatabaseTableName}`,
    commandType: 'Text',
    connectionStringSetting: process.env.AzureSQLDatabaseConnectionStringSettingName
});

export async function GetPrayerTimes(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const items = context.extraInputs.get(sqlInput);

    return { jsonBody: items, status: 200 };
};

app.http('GetPrayerTimes', {
    methods: ['GET'],
    authLevel: 'anonymous',
    extraInputs: [sqlInput],
    handler: GetPrayerTimes
});
