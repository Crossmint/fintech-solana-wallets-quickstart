import Image from "next/image";
import { Container } from "./common/Container";

const newProducts: NewProductProps[] = [
  {
    title: "Get your card",
    description: "Set up a card to start using your funds",
    image: "/credit-card-pro.png",
  },
  {
    title: "Earn yield",
    description: "Get up to 3.15% APY",
    image: "/earn-yield.png",
  },
];

interface NewProductProps {
  title: string;
  description: string;
  image: string;
}

const NewProduct = ({ title, description, image }: NewProductProps) => {
  return (
    <Container className="flex flex-1 justify-between">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <img className="w-fit" src={image} alt={title} />
        </div>
        <div>
          <div className="text-base font-semibold">{title}</div>
          <div className="text-sm text-slate-500">{description}</div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start md:justify-center">
        <div className="min-w-[92px] rounded-3xl bg-indigo-50 px-2 py-1 text-xs font-medium text-blue-600">
          Coming soon
        </div>
      </div>
    </Container>
  );
};

export function NewProducts() {
  return (
    <div className="my-2 flex flex-col gap-2 md:flex-row">
      {newProducts.map((product) => (
        <NewProduct key={product.title} {...product} />
      ))}
    </div>
  );
}
