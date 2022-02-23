import { render } from "../../utils/testUtils";
import { RegistrarCandidato } from "../RegistrarCandidato";

describe("RegistrarCandidato", () => {
  it("should return an error if fields are empty", () => {
    render(<RegistrarCandidato />);
  });
});
