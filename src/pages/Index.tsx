
// 首页导航/入口页。这里将用户自动导向 /home。
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", { replace: true });
  }, [navigate]);
  return null;
};

export default Index;
