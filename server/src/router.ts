import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
import { Router } from 'express';
import { getMessages, addMessage } from './modules/guestbookcontroller/guestbookcontroller';


// Récupérer tous les messages
router.get('/messages', getMessages);

// Ajouter un nouveau message
router.post('/messages', addMessage);


// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
