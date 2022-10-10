import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ReadAllItems = (props) => {
  return (
    <div>
      <Head><title>Next Market</title></Head>
      <div className="grid-container-in">
        {props.allItems.map(item =>
          <Link href={`/item/${item._id}`} key={item._id}>
            <a>
              <Image src={item.image} width="750px" height="500px" alt="item-image" />
              <div>
                <h2>{item.price}</h2>
                <h2>{item.title}</h2>
                <h2>{item.description.substring(0.80)}...</h2>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReadAllItems;

export const getStaticProps = async () => {
  const response = await fetch("https://nextjs-ref-book-full-stack-app.vercel.app/api/item/readall");
  // const response = await fetch("http://localhost:4000/api/item/readall");
  const allItems = await response.json();
  return {
    props: allItems,
  }
};
