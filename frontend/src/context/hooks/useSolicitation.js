import { useState, useEffect } from "react";

import api from "../../api";

export default function useSolicitation() {
	const [solicitations, setSolicitations] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			console.log("setSolicitations");
			api.get("/solicitation")
				.then((res) => {
					setSolicitations(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	async function getSolicitations() {
		const token = localStorage.getItem("token");
		if (token) {
			console.log("getSolicitations");
			const res = await api.get("/solicitation");
			setSolicitations(res.data);
		}
	}

	async function createSolicitation(name, description) {
		const token = localStorage.getItem("token");
		if (token) {
			console.log("createSolicitation");
			await api.post("/solicitation", { name, description });
		}
	}

	async function closeSolicitation(id, reply, link) {
		const token = localStorage.getItem("token");
		if (token) {
			console.log("closeSolicitation");
			await api.post(`/solicitation/close`, { id, reply, link });
		}
	}

	return {
		solicitations,
		getSolicitations,
		createSolicitation,
		closeSolicitation,
	};
}
