import { Divider, Modal } from "antd";
import Image from "next/image";
import { GoogleSignButton } from "./GoogleSignButton";
export interface ILogin {
  setIsModalOpen: (val: boolean) => void;
  isModalOpen: boolean;
}

const Login = (props: ILogin) => {
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  return (
    <Modal open={props.isModalOpen} onCancel={handleCancel} footer={[]}>
      <h1 className="text-2xl font-bold text-center text-sky-500">
        Connect with
      </h1>
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="mx-auto"
      />
      <h2 className="text-xl font-bold text-center text-gray-400">
        Invoice Magic at Zero Cost
      </h2>
      <Divider />
      <GoogleSignButton />
    </Modal>
  );
};

export default Login;
