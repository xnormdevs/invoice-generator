"use client";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;


export default function Home() {
  return (
    <main>
      <Link legacyBehavior href="/invoice-generator">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src="/invoice.png" alt="invoice" width={100} height={100} />
          }
        >
          <Meta
            title="Free Invoice Generator"
            description="Generate your free invoice in seconds."
          />
        </Card>
      </Link>
    </main>
  );
}
