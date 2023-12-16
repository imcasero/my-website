
export default function TechComponent({ tech }: { tech: string }) {
    return (
        <li className="bg-tag py-1 px-4 rounded-lg" key={tech}>{tech}</li>
    )
}
