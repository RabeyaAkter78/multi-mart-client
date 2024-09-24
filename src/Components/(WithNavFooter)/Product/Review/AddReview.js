import { Form, Input, Button, Rate } from "antd";
import React from "react";

const AddReview = () => {
  const [form] = Form.useForm();

  // Form submission handler
  const handleSubmit = (values) => {
    console.log("Review Submitted:", values);
    form.resetFields(); // Clear form after submit
  };

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-4">Add a review</h1>
      <div className="text-gray-700 flex justify-start items-center gap-4 mb-4">
        Rate this product{" "}
        <Rate allowHalf defaultValue={0} style={{ color: "#854d0e" }} />
      </div>

      {/* Review Form */}
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Please write a comment!" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Write comment"
            className="bg-gray-100 p-3"
          />
        </Form.Item>

        {/* Name Input */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Your name" className="bg-gray-100 p-3" />
        </Form.Item>

        {/* Email Input */}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input placeholder="Email address" className="bg-gray-100 p-3" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <button
            type="submit"
            className="bg-button-color text-white px-4 py-2"
          >
            Submit comment
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddReview;
