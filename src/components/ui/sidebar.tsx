import { ReactNode } from "react"
import { Button } from "./button"
import { LucideIcon, PanelLeftClose, Search, SquarePen } from "lucide-react"

type sideBarButtonProps = {
    Icon: LucideIcon,
    className?: string,
    onClick?: () => void
}

function SidebarButton({ Icon, className = "", onClick = () => { } }: sideBarButtonProps) {
    return <Button variant="ghost" size="icon" className={`hover:bg-neutral-200 p-5 ${className}`} onClick={onClick}><Icon color="#555555" style={{ width: 22, height: 22 }} /></Button>
}

type sidebarProps = {
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
    children: ReactNode;
};

const ItemButton = ({ children }: Props) => {
    return (
        <Button
            variant="ghost"
            className="w-full justify-start truncate transition-none hover:bg-neutral-200 text-[14px] font-normal p-2 hover:text-accent-foreground"
        >
            {children}
        </Button>
    );
};


const conversationTitles = [
    {
        day: "Today",
        titles: [
            "React Component Debugging",
            "Tailwind CSS Tips and Tricks",
            "TypeScript Best Practices",
        ]
    },
    {
        day: "Yesterday",
        titles: [
            "System Design Mock Interviews",
            "How to Build a REST API with Flask",
            "Using OpenAI API in Projects",
            "LeetCode Problem Solving Strategies",
            "Git and GitHub Best Practices",
        ]
    },
    {
        day: "Previous 7 days",
        titles: [
            "Tech Interview Preparation",
            "AI in Real-World Applications",
            "Understanding Cloud Computing",
            "Building and Deploying Full-Stack Apps",
            "Optimizing Frontend Performance",
            "Learning New Programming Languages",
            "Designing Scalable Applications"
        ]
    },
    {
        day: "Previous 30 days",
        titles: [
            "Personal Branding in Tech",
            "Understanding React Hooks",
            "AI and Machine Learning Concepts",
            "Building an Instagram-like App",
            "Career Advice in Tech",
            "Data Structures and Algorithms",
        ]
    }
];

export default function Sidebar({ sidebar, setSidebar }: sidebarProps) {
    const sidebarButtons = [
        { Icon: PanelLeftClose, onClick: () => setSidebar(false) },
        { Icon: Search, className: "ml-auto" },
        { Icon: SquarePen }
    ];

    return (
        <div className={`${sidebar ? "w-[16.2rem] p-3" : "w-0 p-0"} ease-linear duration-200 transition-[width,padding] overflow-x-clip h-screen flex flex-col bg-neutral-50 m-0`}>
            <div className="flex">
                {sidebarButtons.map((button, index) => (
                    <SidebarButton
                        key={index}
                        Icon={button.Icon}
                        onClick={button.onClick}
                        className={button.className}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto">
                {
                    conversationTitles.map(({ day, titles }) => (
                        <div key={day}>
                            <h5 className="text-xs p-2 font-medium">{day}</h5>
                            {
                                (
                                    titles.map(title => <ItemButton>{title}</ItemButton>)
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}