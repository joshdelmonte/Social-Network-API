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
 
// **`/api/thoughts`** (get all thoughts) (get one thought by its `_id`) (create thought) (update thought by its `_id`) (delete thought by its `_id`) (create reaction stored in a single thought's `reactions` array field) (delete reaction by the reaction's `reactionId` value)

// * `GET` to get all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// * `GET` to get a single thought by its `_id`
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
router.route('/:userId').post(createThought);

//secion for reactions
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;