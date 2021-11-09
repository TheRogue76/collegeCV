import React from 'react';

interface Props {
  htmlAttributes: React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >;
  headComponents: JSX.Element[];
  bodyAttributes: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  preBodyComponents: JSX.Element[];
  body: string;
  postBodyComponents: JSX.Element[];
}

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}: Props) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
