import { redirect } from "next/navigation"
import { authClient } from "@/app/_lib/auth-client"
import { headers } from "next/headers"
import { getHomePageData } from "./_lib/api/fetch-generated"
import dayjs from "dayjs"

export default async function Home() {
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	})

	if (!session.data?.user) redirect("/")

	const today = dayjs()
	const homeData = await getHomePageData(today.format("YYYY-MM-DD"))

	console.warn("homeData", { homeData })

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				Home
			</main>
		</div>
	)
}
//39:45
