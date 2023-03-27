//  typescript

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;
const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = keyof typeof testingFrameworks;

// discriminated union.
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };
// B is a union, but not a discriminated union.
type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: "click" }>;
type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;
type EventType = Event["type"];

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataDefaults = typeof fakeDataDefaults;

export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type IDType = FakeDataDefaults["ID"];

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type IndividualProgram = typeof programModeEnumMap[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

export type GroupProgram = typeof programModeEnumMap["GROUP"];
export type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];

export type IndividualProgram1 = typeof programModeEnumMap[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type BackendModuleEnum =
  typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];

export type BackendModuleEnum2 = typeof frontendToBackendEnumMap[Exclude<
  keyof typeof frontendToBackendEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwich with ${Filling}`;

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type Event1 = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys1 = Record<Uppercase<Event1>, string>;

type IsArray<T> = T extends Array<any> ? true : false;

type AA = IsArray<number>; // false
type BB = IsArray<string[]>; // true

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";
type IsayHello = YouSayGoodbyeAndISayHello<"hello">; // true

type YouSayGoodbyeAndISayHello1<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;
type IsayHello1 = YouSayGoodbyeAndISayHello1<"goodbye">; // true

type GetDataValue<T> = T extends { data: any } ? T["data"] : never;
type DataValue = GetDataValue<{ data: number }>; // number
type DataValue1 = GetDataValue<{ data: { name: "hello"; age: 20 } }>;

type GetDataValeNext<T> = T extends { data: infer TInferredData }
  ? TInferredData
  : never;
type DataValueNext = GetDataValeNext<{ data: number }>; // number
type DataValueNext1 = GetDataValeNext<{ data: { name: "hello"; age: 20 } }>;

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type Point = GetPoint<Example>; // { x: 12; y: 14 }

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King"
];

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;
type Surnames = GetSurname<Names[number]>; // "Pocock" | "Hendrix" | "Clapton" | "Mayer" | "King"
type Surnames1 = GetSurname<"Matt Pocock">; // "Pocock"
type Surnames2 = GetSurname<Names[0]>;

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;
type ParserResult = GetParserResult<typeof parser1>; // number

type Fruit2 = "apple" | "banana" | "orange";

type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana2 = GetAppleOrBanana<Fruit>;

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [R in Route]: R;
};

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type AttributeGetters1 = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

interface Example1 {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};
type OnlyIdKeys1 = OnlyIdKeys<Example1>;

type Route1 =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/**
 * This is useful, but less powerful than solution 2:
 */
type RoutesObject1 = {
  [R in Route1["route"]]: Extract<Route1, { route: R }>["search"];
};

// https://github.com/total-typescript/type-transformations-workshop/blob/main/src/05-key-remapping/33-discriminated-union-to-object.solution.1.ts

// https://github.com/total-typescript/typescript-generics-workshop/blob/main/src/05-function-overloads/22-function-overloads-vs-conditional-types.problem.ts

// https://github.com/total-typescript/advanced-patterns-workshop/tree/main/src/04-classes

type Shape ={
  type: "circle" | "square" | "rectangle";
  color: string | number;
}

const shape = {
  type: "circle",
  color: "red"
} satisfies Shape