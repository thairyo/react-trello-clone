import { HttpStatusCode } from "*/utilities/constants";
import { BoardService } from "*/services/board.service";

const createNew = async (req, res) => {
  try {
    const result = await BoardService.createNew(req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    // error thì client res.status
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      errors: error.message,
    });
  }
};

export const BoardController = { createNew };
