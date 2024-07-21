"use client";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

export default function Home() {
  return (
    <main>
      <div className="w-[90%] mx-auto flex items-center justify-around">
        <Link legacyBehavior href="/invoice-generator">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <Image
                src="/invoice.png"
                alt="invoice"
                width={100}
                height={100}
              />
            }
          >
            <Meta
              title="Free Invoice Generator"
              description="Generate your free invoice in seconds."
            />
          </Card>
        </Link>

        <Link legacyBehavior href="/letter-generator">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <Image src="/letter.png" alt="letter" width={100} height={100} />
            }
          >
            <Meta
              title="Free Letter Generator"
              description="Generate your free letter in seconds."
            />
          </Card>
        </Link>
      </div>
    </main>
  );
}
