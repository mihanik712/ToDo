import * as t from "io-ts";

export const CatFactRuntime = t.type ({
	fact: t.string
});

export type CatFactType = t.TypeOf<typeof CatFactRuntime>;
