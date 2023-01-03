import express from'express' ;
import multer from '../middleware/multer-config.js';
import  {GetCommentaire,GetALLCommentaire,addCommentaire,UpdateCommentaire,deleteCommentaire, getbypost} from"../Controller/CommentaireController.js" ;





const router = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     Commentaire:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a categorie
 *         com:
 *           type: string
 *           description: title of a Commentaire
 *         date:
 *           type: date
 *           description: date of a Commentaire
 *         
 *         
 *          
 *       example:
 *         com: divorce case
 *         date: 09/12/2023
 *         
 *
 */
/**
 * @swagger
 *  tags:
 *    com: Commentaire
 *    description: Commentaire
 */
/**
 * @swagger
 * /Commentaire/add:
 *   post:
 *     summary: Create a new Commentaire
 *     tags: [Commentaire]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commentaire'
 *     responses:
 *       200:
 *         description: The Commentaire was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentaire'
 *       500:
 *         description: Some server error
 */
router.post('/add',addCommentaire)


/**
 * @swagger
 * /Commentaire/update/{id}:
 *   post:
 *     summary: updates Commentaire by id
 *     tags: [Commentaire]
 *     parameters:
 *       - in: path
 *         com: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Commentaire id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commentaire'
 *     responses:
 *       200:
 *         decsription: The Commentaire was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentaire'
 *       404:
 *         description: Commentaire was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router.post('/update/:id',UpdateCommentaire);


/**
 * @swagger
 *  /Commentaire/delete/{id}:
 *    delete:
 *      summary: removes a Commentaire
 *      tags: [Commentaire]
 *      parameters:
 *        - in: path
 *          com: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The Commentaire was deleted
 *        404:
 *          description: The Commentaire was not found
 *
 */
router.delete('/delete/:id',deleteCommentaire)
/**
 * @swagger
 *  /Commentaire/{id}:
 *    get:
 *      summary: Get a Commentaire
 *      tags: [Commentaire]
 *      parameters:
 *        - in: path
 *          com: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Commentaire by its id
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentaire'
 *        404:
 *          description: The Commentaire was not found
 *
 */
router.get('/:id',GetCommentaire)
/**
 * @swagger
 *  /Commentaire:
 *    get:
 *      summary: Get a Commentaire
 *      tags: [Commentaire]
 *     
 *      responses:
 *        200:
 *          description: Commentaire 
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentaire'
 *        404:
 *          description: The Commentaire was not found
 *
 */
 router.get('/',GetALLCommentaire)
/**
 * @swagger
 *  tags:
 *    name: User
 *    description: users
 */
 router.get('/getpost/:idp',getbypost)

export default router;