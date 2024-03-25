import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import SignatureCanvas from "react-signature-canvas";

const SignatureGenerator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const signatureCanvasRef = useRef(null);

  const handleClear = () => {
    signatureCanvasRef.current.clear();
  };

  const handleDownload = () => {
    const canvas = signatureCanvasRef.current.getTrimmedCanvas();
    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.png";
    a.click();
  };

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Draw Signature
      </Button>
      <Modal
        title="Draw Signature"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="clear" onClick={handleClear}>
            Clear
          </Button>,
          <Button key="download" type="primary" onClick={handleDownload}>
            Download
          </Button>,
        ]}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SignatureCanvas
            ref={signatureCanvasRef}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 200,
              className: "signature-canvas",
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SignatureGenerator;
