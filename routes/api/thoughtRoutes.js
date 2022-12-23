const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction


 } = require('../../controllers/thoughtControllers');
 
// **`/api/thoughts`**  (GET, POST) 

// * `GET` to get all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// * `GET` to get a single thought by its `_id`
router
.route('/:id')
.get(getThoughtById)
// * `PUT` to update a thought by its `_id`
.put(updateThought)
// * `DELETE` to remove a thought by its `_id`
.delete(deleteThought);

// **`/api/thoughts/:thoughtId/reactions`**  (POST, DELETE)

// * `POST` to create a reaction stored in a single thought's `reactions` array field
router.route('/:thoughtId/reactions').post(addReaction);

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;