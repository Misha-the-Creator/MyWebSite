import { createFileRoute } from "@tanstack/react-router";
import "katex/dist/katex.min.css";
import { motion } from "motion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataFetcher from "./-DataFetcher";

export const Route = createFileRoute("/ml/$route")({
  component: RouteComponent,
});

const queryClient = new QueryClient();

function RouteComponent() {
  const { route } = Route.useParams();

  return (
    <QueryClientProvider client={queryClient}>
      <motion.div
        lang="ru"
        className="mt-10 mx-5 px-4 pt-10 font-googlesans hyphens-auto border-black border text-base text-justify dark:border-white overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <DataFetcher route={route} />
      </motion.div>
    </QueryClientProvider>
  );
}
