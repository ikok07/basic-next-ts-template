import Link from "next/link";

export default function Footer() {
    return <div className="mt-10">
        <hr />
        <div className="mx-6 my-3 text-lg text-secondary/50 flex items-center justify-between flex-col xs:flex-row">
            <small>Мебели ВаМ ЕООД</small>
            <Link href="/privacy" className="hover:text-accent"><small>Политика за поверителност</small></Link>
        </div>
    </div>
}