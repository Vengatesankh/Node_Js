import express from "express";
import { aboutPage, contactPage, dynamicRoute, mainPage, searchWithQuery } from "../controller/pageController.js";

const pagesRouting = express.Router();

//define a simple routing
pagesRouting.get("/main",mainPage)
pagesRouting.get("/about",aboutPage)
pagesRouting.get("/contact",contactPage)
pagesRouting.get("/user/:username",dynamicRoute)
pagesRouting.get("/search",searchWithQuery)
export default pagesRouting;

