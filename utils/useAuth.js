import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
const secretKey = "nextmarket";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/user/login");
    }
  
    try {
      const decoded = jwt.verify(token, secretKey);
      setLoginUser(decoded.email);
    } catch {
      router.push("/user/login");
    }
  }, [router]);

  return loginUser;
};

export default useAuth;
