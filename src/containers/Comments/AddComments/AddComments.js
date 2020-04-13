import React from "react";
import "./AddComments.scss";
import { Form, Image, TextArea } from "semantic-ui-react";

export function AddComments() {
  return (
    <div className="add-comment">
      <Image
        className="user-image"
        src="http://via.placeholder.com/48x48"
        circular
      />

      <Form>
        <Form.TextArea
          control={TextArea}
          autoHeight
          placeholder="add public comment"
        />
      </Form>
    </div>
  );
}
