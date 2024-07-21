import { Spin } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";

const InvoiceGenerator = () => {
  const InvoiceGeneratorComponent = dynamic(
    () => import("@/components/invoice/Invoice"),
    {
      loading: () => <Spin size="large" tip="Loading..." fullscreen />,
    }
  );

  return (
    <main>
      <Head>
        <title>Invoices</title>
        <meta
          name="description"
          content="App to generate free PDF for your business invoices"
        />
      </Head>
      <InvoiceGeneratorComponent />
    </main>
  );
};

export default InvoiceGenerator;
