"use client";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Image from "next/image";
type UploadImageProps = {
  fileList: UploadFile[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile[]>>;
};
const UploadImage: React.FC<UploadImageProps> = ({ fileList, setFileList }) => {
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1)); // Allow only one file
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" />`);
  };

  return (
    <div>
      <ImgCrop rotationSlider>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          maxCount={1} // Set max count to 1
        >
          {fileList.length < 1 && (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </ImgCrop>
      {fileList.length > 0 && fileList[0].status === "done" && (
        <div
          style={{
            marginTop: 16,
            position: "relative",
            width: "100%",
            height: "300px",
          }}
        >
          <Image
            src={
              fileList[0].url ||
              URL.createObjectURL(fileList[0].originFileObj as Blob)
            }
            alt="Uploaded"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
