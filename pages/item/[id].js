import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ReadSingleItem = (props) => {
  return (
    <div className="grid-container-si">
      <Head><title>{props.singleItem.title}</title></Head>
      <div>
        <Image src={props.singleItem.image} width="750px" height="500px" alt="item-image" />
      </div>
      <div>
        <h1>{props.singleItem.title}</h1>
        <h1>{props.singleItem.price}</h1>
        <hr />
        <p>{props.singleItem.description}</p>
        <div>
          <Link href={`/item/update/${props.singleItem._id}`}><a>アイテム編集</a></Link>
          <Link href={`/item/delete/${props.singleItem._id}`}><a>アイテム削除</a></Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(`https://nextjs-ref-book-full-stack-app.vercel.app/api/item/${context.query.id}`);
  // const response = await fetch(`http://localhost:4000/api/item/${context.query.id}`);
  const singleItem = await response.json();
  return {
    props: singleItem,
  }
};
