import React from 'react';

export default function Form(props: RazorWindProps.Form.Form) {
  return (
    <form
      {...props}
      className={'form-container' + (props.className ? (' ' + props.className) : '')}
      method={props.method ? props.method : 'post'}
    >
      {props.children}
    </form>
  );
}
