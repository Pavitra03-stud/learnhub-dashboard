import { supabase } from "../src/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  return (
    <main style={{ padding: "20px" }}>
      <h1>Supabase Test</h1>

      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}