import dynamic from "next/dynamic";
import { Alert, Flex, Spin } from "antd";
export default async function Home() {
  const DynamicHeader = dynamic(() => import("@/components/invoice/Invoice"), {
    loading: () => <Spin size="large" tip="Loading..." fullscreen />,
  });
  return (
    <main>
      <DynamicHeader />
    </main>
  );
}
