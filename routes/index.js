var express = require('express');
var router = express.Router();
var adQueries = require('../queries/adQueries');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aricent OLX' });
});

/**
 * @swagger
 * definition:
 *   Advertisement:
 *     properties:
 *       title:
 *         type: string
 *         description: title of posted ad
 *       description:
 *         type: string
 *         description: description of posted ad
 *       location:
 *         type: string
 *         description: location of employee who posted the ad
 *       Category:
 *         type: object
 *         properties:
 *          categoryName:
 *           type: string
 *           description: name of category
 *          condition:
 *           type: string
 *           description: condition of posted ad(new/used)
 *          price:
 *           type: number
 *           description: price of posted ad
 *          brand:
 *           type: string
 *           description: brand name of posted ad
 *          fuelType:
 *           type: string
 *           description: fuelType of posted ad
 *          kmDriven:
 *           type: number
 *           description: kmDriven by posted vehicle
 */

/**
 * @swagger
 * /api/advertisement:
 *   get:
 *     tags:
 *       - advertisement
 *     description: Returns all the posted Advertisements
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Advertisement
 *         schema:
 *           $ref: '#/definitions/Advertisement'
 */
router.get('/api/advertisement', adQueries.getAllAdvertisement);

/**
 * @swagger
 * /api/advertisement/{id}:
 *   get:
 *     tags:
 *       - advertisement
 *     description: Returns a single Advertisement
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Advertisement's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Advertisement
 *         schema:
 *           $ref: '#/definitions/Advertisement'
 */
//router.get('/api/advertisement/:id', '');

/**
 * @swagger
 * /api/advertisement:
 *   post:
 *     tags:
 *       - advertisement
 *     description: Creates a new Advertisement
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: advertisement
 *         description: Advertisement object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Advertisement'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/advertisement',adQueries.createAdvertisement);

/**
 * @swagger
 * /api/advertisement/{id}:
 *   put:
 *     tags:
 *       - advertisement
 *     description: Updates a single Advertisement
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Advertisement's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: advertisement
 *         description: Advertisement object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Advertisement'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
//router.put('/api/advertisement/:id', '');

/**
 * @swagger
 * /api/advertisement/{id}:
 *   delete:
 *     tags:
 *       - advertisement
 *     description: Deletes a single Advertisement
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Advertisement's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
//router.delete('/api/advertisement/:id', '');


module.exports = router;
