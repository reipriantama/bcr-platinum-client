import { handler } from "./handler";

export default ({
    loginAdmin: (body) => handler.post("/customer/auth/login", body)
});