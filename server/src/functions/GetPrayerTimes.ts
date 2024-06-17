import { app, HttpRequest, HttpResponseInit, InvocationContext, input } from "@azure/functions";

const blobInput = input.storageBlob({
    path: process.env.AzurePrayerTimesBlobPath,
    connection: "StorageAccountConnectionString",
});

export async function GetPrayerTimes(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const items = context.extraInputs.get(blobInput);

    return { jsonBody: items, status: 200 };
};

app.http('GetPrayerTimes', {
    methods: ['GET'],
    authLevel: 'anonymous',
    extraInputs: [blobInput],
    handler: GetPrayerTimes
});
