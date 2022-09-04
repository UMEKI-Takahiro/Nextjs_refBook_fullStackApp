import jwt from "jsonwebtoken";
const secretKey = "nextmarket";

const auth = (handler) => {
  return async(req, res) => {
    if(req.method === "GET") {
      return handler(req, res);
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTY2MjI4MTQ1OCwiZXhwIjoxNjYyMzY0MjU4fQ.NSlJXHoQTSQzBBicnlR6BbXSp9Cr--FdzcXikHMFybk";
    // const token = await req.headers.authorization.split(" ")[1];
    if(!token) {
      return res.status(401).json({
        message: "トークンがありません",
      });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      req.body.email = decoded.email;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({
        message: "トークンが正しくないのでログインしてください"
      });      
    }
  };
};

export default auth;
