"use client";
import { LoginOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "../authModal/Login";
import AntDButton from "../button/AntDButton";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const { data } = useSession();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={() => signOut()}>Logout</p>,
    },
  ];
  return (
    <nav className="bg-gray-800 h-15 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-xl font-bold">
            <Image src="/logo.png" alt="Google" width={200} height={200} />
          </div>
        </Link>
        <div className="flex items-center">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/info" className="text-gray-300 hover:text-white ml-4">
            Info
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white ml-4">
            Contact
          </Link>

          <div className="ml-4">
            {data?.user ? (
              <>
                {data?.user?.image && (
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    <Avatar
                      src={data?.user?.image}
                      size="large"
                      className="cursor-pointer"
                    />
                  </Dropdown>
                )}
              </>
            ) : (
              <AntDButton
                title="Login"
                icon={<LoginOutlined />}
                clickEvent={showModal}
                className="ml-4"
                colorType="infoColors"
              />
            )}
          </div>
        </div>
      </div>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
