import { useState } from "react";
import "./AdminLogin.scss";

const AdminLogin = () => {

    const [userAdminEmail, setUserAdminEmail] = useState();
    const [userAdminPassword, setUserAdminPassword] = useState();

    const handleEmailInputChange = (e: any) => {
        setUserAdminEmail(e.target.value);
    }

    const handlePasswordInputChange = (e: any) => {
        setUserAdminPassword(e.target.value);
    }

    const handleLoginFormSubmitClick = (e: any) => {
        e.preventDefault();
        console.log(`email: ${userAdminEmail}`);
        console.log(`password: ${userAdminPassword}`);
    }

    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        name="user-admin-email"
                        onChange={handleEmailInputChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="user-admin-password"
                        onChange={handlePasswordInputChange}
                    />
                </div>
                <div>
                    <input type="submit" onClick={handleLoginFormSubmitClick} />
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;