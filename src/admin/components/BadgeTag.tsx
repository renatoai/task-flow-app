

export default function BadgeTag({ title, color }: { title: string, color: string }) {
    return (
        <span className={`bg-${color}-50 px-1 py-1.5 border border-${color}-100 rounded-lg text-sm text-${color}-800 font-medium`}>
            {title}
        </span> 
    )
}
