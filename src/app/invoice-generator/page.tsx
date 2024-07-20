import { Spin } from "antd";
import dynamic from "next/dynamic";

const InvoiceGenerator = () => {
  const InvoiceGeneratorComponent = dynamic(() => import("@/components/invoice/Invoice"), {
    loading: () => <Spin size="large" tip="Loading..." fullscreen />,
  });

  return (
    <main>
      <InvoiceGeneratorComponent />
    </main>
  );
};

export default InvoiceGenerator;
