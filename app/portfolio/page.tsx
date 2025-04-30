
import { cn } from "@/lib/utils";
import { projectsData } from "@/services/data";

async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filtered_by?: string }>;
}) {
  const query = (await searchParams)?.filtered_by || "All";

  return (
    <main className="relative">
      
    </main>
  );
}

export default PortfolioPage;
