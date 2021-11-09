import * as UiPath from "@pulumi/UiPath";

const random = new UiPath.Random("my-random", { length: 24 });

export const output = random.result;