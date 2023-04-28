import { Router } from "express";
import UserRoutes from "./controllers/user";

const BackendAPI = Router();

BackendAPI.use("/user", UserRoutes);

BackendAPI.get("/test", (req, res) => {
  res.json({
    message: "Backend is running..",
  });
});

export default BackendAPI;
