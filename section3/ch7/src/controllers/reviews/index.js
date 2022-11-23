import { Router } from "express";

class ReviewController {
  router = Router();
  path = "/reviews";
  #reviews = [
    {
      id: 1,
      title: "Good Movie",
      content: "Good",
    },
  ];
  constructor() {
    this.#init();
  }

  #init() {
    this.router.get("/", this.#getReviews.bind(this));
    this.router.post("/", this.#createReview.bind(this));
    this.router.patch("/:id", this.#updateReview.bind(this));
    this.router.delete("/:id", this.#deleteReview.bind(this));
  }

  #getReviews(req, res, next) {
    try {
      res.status(200).json({ reviews: this.#reviews });
    } catch (err) {
      next(err);
    }
  }

  #createReview(req, res, next) {
    try {
      const { title, comment } = req.body;
      const id = new Date().getTime();

      this.#reviews.push({ id, title, comment });

      res.status(201).json({ id });
    } catch (err) {
      next(err);
    }
  }

  #updateReview(req, res, next) {
    try {
      const { id } = req.params;

      const { title, comment } = req.body;

      const idx = this.#reviews.findIndex((user) => user.id === Number(id));

      if (!idx) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }

      this.#reviews[idx] = { ...review, title, comment };

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }

  #deleteReview(req, res, next) {
    try {
      const { id } = req.params;

      const idx = this.#reviews.findIndex((user) => user.id === Number(id));

      if (!idx) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }

      this.#reviews = this.#reviews.filter((user) => user.id !== Number(id));

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const reviewController = new ReviewController();
export default reviewController;
