import { useState } from "react";
import Head from "next/head";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://nextjs-ref-book-full-stack-app.vercel.app/api/user/register", {
      // const response = await fetch(`http://localhost:4000/api/user/register`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(response);
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("ユーザー登録失敗");
      console.error(err);
    }
  };

  return (
    <div>
      <Head><h1>ユーザー登録</h1></Head>
      <h1 className="page-title">ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={ e => setName(e.target.value) } type="text" name="name" placeholder="名前" required />
        <input value={email} onChange={ e => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required />
        <input value={password} onChange={ e => setPassword(e.target.value)} type="text" name="password" placeholder="パスワード" required />
        <button>登録</button>
      </form>
    </div>
  );
};

export default Register;
