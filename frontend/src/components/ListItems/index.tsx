"use client";

import Image from "next/image";
import { Section } from "./style";
export interface ListItemsInterface {
  title: string;
  imageUrl: string;
}

const ListItems = (props: { items: ListItemsInterface[] }) => {
  return (
    <Section className="listItems">
      {props.items.map((item, index) => (
        <span key={index}>
          <Image
            className="divider"
            width={64}
            height={64}
            src={item.imageUrl}
            alt=""
          />
          <h1>{item.title}</h1>
          <p>
            Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor
            lacus eleifend tincidunt sceleris
          </p>
        </span>
      ))}
    </Section>
  );
};

export default ListItems;
