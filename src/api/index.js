import { handler } from "./handler";

export default ({
    signUpClient: (body) => handler.post("/customer/auth/register", body),
    loginAdmin: (body) => handler.post("/customer/auth/login", body),
    createOrder: (body) => handler.post("/customer/order", body),
    uploadImage: (id, body) => handler.put(`/customer/order/${id}/slip`, body),
});