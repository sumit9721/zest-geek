import "./App.css";
import "antd/dist/antd.css";
import { useState } from "react";
import React from "react";
import { Row, Col, Card, Input, Form, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Showtable from "./Showtable";

function App() {
  const [form] = Form.useForm();
 const [showTable, setShowTable] = useState(false)

  const getFields = () => {
    const count =  10 ;
    const children = [];

    for (let i = 1; i <= count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      );
    }

    return children;
  };

  const onFinish = (values) => {
    console.log("HJDSGHJFDS",values)
    localStorage.setItem("formdata",JSON.stringify(values))
  };

  return (
    <div className="flex justify-center">
      <Card>
     {showTable  ?
      <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>{getFields()}</Row>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: "right",
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => {
                  setShowTable(!showTable)
                }}
              >
                Show Table
              </Button>
            
            </Col>
          </Row>
        </Form>
      :<Showtable showTable={showTable} setShowTable={setShowTable}/>}
      </Card>
    </div>
  );
}

export default App;
