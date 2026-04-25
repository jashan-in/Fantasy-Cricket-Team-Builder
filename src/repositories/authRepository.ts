import { useAuth } from "@clerk/react";

export function useAuthRepository() {
    const { getToken } = useAuth();

    async function getMe() {
        const token = await getToken();

        const res = await fetch("http://localhost:4000/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch current user");
        }

        return res.json();
    }

    return { getMe };
}