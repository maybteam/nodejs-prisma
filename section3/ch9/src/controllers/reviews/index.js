import { Router } from "express";

class ReviewController {
  router;
  path = "/reviews";
  reviews = [
    {
      id: 1,
      title: "Good Movie",
      content: "Good",
    },
  ];
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.getReviews.bind(this));
    this.router.post("/", this.createReview.bind(this));
    this.router.patch("/:id", this.updateReview.bind(this));
    this.router.delete("/:id", this.deleteReview.bind(this));
  }

  getReviews(req, res, next) {
    res.status(200).json({ reviews: this.reviews });
  }

  createReview(req, res, next) {
    try {
      const { title, comment } = req.body;
      const id = new Date().getTime();

      this.reviews.push({ id, title, comment });

      res.status(201).json({ id });
    } catch (err) {
      next(err);
    }
  }

  updateReview(req, res, next) {
    try {
      const { id } = req.params;

      const { title, comment } = req.body;

      this.reviews.forEach((review, index) => {
        if (review.id === Number(id)) {
          this.reviews[index] = { ...review, title, comment };
        }
      });

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }

  deleteReview(req, res, next) {
    try {
      const { id } = req.params;

      this.reviews = this.reviews.filter((review) => review.id !== Number(id));

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const reviewController = new ReviewController();
export default reviewController;
