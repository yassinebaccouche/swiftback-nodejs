import express from'express' ;
import multer from '../middleware/multer-config.js';
import  {Getpost,deletepost,Updatepost,addpost, Getp, getbyUser} from"../Controller/PostCont.js" ;






const router = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     categorie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a categorie
 *         Title:
 *           type: string
 *           description: first name of a categorie
 *         
 *          
 *       example:
 *         name: droit civil
 *         
 *
 */
/**
 * @swagger
 *  tags:
 *    name: categorie
 *    description: Categories
 */
/**
 * @swagger
 * /post/addp:
 *   post:
 *     summary: Create a new User
 *     tags: [categorie]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categorie'
 *     responses:
 *       200:
 *         description: The categorie was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorie'
 *       500:
 *         description: Some server error
 */
router.post('/addp',addpost)


/**
 * @swagger
 * /post/update/{id}:
 *   post:
 *     summary: updates posts by id
 *     tags: [post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/post'
 *     responses:
 *       200:
 *         decsription: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/post'
 *       404:
 *         description: categorie was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router.post('/update/:id',Updatepost);


/**
 * @swagger
 *  /categorie/delete/{id}:
 *    delete:
 *      summary: removes a categorie
 *      tags: [categorie]
 *      parameters:
 *        - in: path
 *          name: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The categorie was deleted
 *        404:
 *          description: The categorie was not found
 *
 */
router.delete('/deletep/:id',deletepost)
/**
 * @swagger
 *  /categorie/{id}:
 *    get:
 *      summary: Get a categorie
 *      tags: [categorie]
 *      parameters:
 *        - in: path
 *          name: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: categorie by its id
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorie'
 *        404:
 *          description: The categorie was not found
 *
 */
router.get('/hl/:id',Getpost)
/**
 * @swagger
 *  /categorie:
 *    get:
 *      summary: Get all categorie
 *      tags: [categorie]
 *     
 *      responses:
 *        200:
 *          description: categorie 
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorie'
 *        404:
 *          description: The categorie was not found
 *
 */
 router.get('/post',Getp)


 /**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         first_name:
 *           type: integer
 *           description: first name of a user
 *         last_name:
 *           type: string
 *           description: last name of a user
 *         email:
 *           type: string
 *           descripton: email of a user
 *         password:
 *            type: string
 *            descripton: password of a user
 *         categorie:
 *            type: string
 *         experience:
 *            type: number
 *          
 *       example:
 *         first_name: ahmadi
 *         last_name: hassen
 *         email: hassenahmadi@ymail.com
 *         password: aaa
 *         categorie: droit civil
 *         experience : 5 
 *
 */
/**
 * @swagger
 *  tags:
 *    name: User
 *    description: users
 */
router.get('/getpost/:id',getbyUser)

export default router;