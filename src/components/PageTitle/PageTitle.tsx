import React from 'react';

type PageTitlePropsType = {
   title: string
}

export const PageTitle = (props: PageTitlePropsType) => {
   return (
      <h1>{props.title}</h1>
   );
};

