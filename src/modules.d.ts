declare module '*.css' {
  const content: string
  export default content
}

type JSONValue = string | number | boolean | JSONObject | JSONArray

interface JSONObject {
  [x: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> {}

declare module '*.json' {
  const content: JSONValue
  export default content
}
