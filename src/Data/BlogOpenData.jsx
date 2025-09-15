const LikeIcon = ({ color }) => (
    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.83203 13.4442C2.83203 20.3333 8.52622 24.0044 12.6945 27.2903C14.1654 28.4499 15.582 29.5416 16.9987 29.5416C18.4154 29.5416 19.832 28.4499 21.3029 27.2903C25.4712 24.0044 31.1654 20.3333 31.1654 13.4442C31.1654 6.555 23.3735 1.66935 16.9987 8.2925C10.6239 1.66935 2.83203 6.555 2.83203 13.4442Z" fill={color} />
    </svg>
);
const SharedIcon = () => (
    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.553 8.0556C19.553 5.44758 21.6768 3.33337 24.2967 3.33337C26.9165 3.33337 29.0404 5.44758 29.0404 8.0556C29.0404 10.6636 26.9165 12.7778 24.2967 12.7778C22.9738 12.7778 21.7782 12.2385 20.9187 11.3708L14.3519 15.8419C14.4126 16.1436 14.4444 16.4552 14.4444 16.7735C14.4444 17.404 14.3198 18.0066 14.094 18.5574L21.2945 23.2883C22.1117 22.6228 23.1574 22.2223 24.2967 22.2223C26.9165 22.2223 29.0404 24.3365 29.0404 26.9445C29.0404 29.5525 26.9165 31.6667 24.2967 31.6667C21.6768 31.6667 19.553 29.5525 19.553 26.9445C19.553 26.2614 19.6992 25.6112 19.962 25.0241L12.8196 20.3315C11.9865 21.0556 10.8951 21.4958 9.70072 21.4958C7.08085 21.4958 4.95703 19.3816 4.95703 16.7735C4.95703 14.1655 7.08085 12.0513 9.70072 12.0513C11.2072 12.0513 12.5483 12.7503 13.4166 13.8382L19.7809 9.50498C19.6329 9.04763 19.553 8.56031 19.553 8.0556Z" fill="#DA9E8B" />
    </svg>
);

export const BlogOpenData = [
    {
        id: 2,
        MedaiaBtn: [
            "/images/Blog OPen Page/Twitter.svg",
            "/images/Blog OPen Page/Icon2.svg",
            "/images/Blog OPen Page/Facebok.svg"
        ],
        DetailsOfBlog: [
            {
                TitleSectionBlog: "The Essence of Minimalism in Design",
                TextsOfBlog: [
                    "In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful.",
                    "As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.",
                    "At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.",
                ],
            },
            {
                TitleSectionBlog: "Minimalism Beyond Aesthetics",
                TextsOfBlog: [
                    "Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.",
                    "Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric."
                ],
            },
            {
                TitleSectionBlog: "Practical Tips for Mastering Minimalistic Design",
                TextsOfBlog: [
                    "The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.",
                    "Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.",
                    "Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole."
                ],
            },
        ],
        ProfileImage: "/images/Blog OPen Page/Profile1.webp",
        Name: "Wade Warren",
        Job: "Art Director",
        Bio: "Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.",
        email: "@wadewarren",
        SocialStats: [
            {
                IconSvg: (color) => <LikeIcon color={color} />,
                Description: "Liked By",
                NumberReaction: "2.6",
                Users: "Users",
            },
            {
                IconSvg: <SharedIcon />,
                Description: "Shared BY",
                NumberReaction: "120",
                Users: "Users",
            },
        ]
    },
    {
        id: 1,
        MedaiaBtn: [
            "/images/Blog OPen Page/Twitter.svg",
            "/images/Blog OPen Page/Icon2.svg",
            "/images/Blog OPen Page/Facebok.svg"
        ],
        DetailsOfBlog: [
            {
                TitleSectionBlog: "Achieving Sustainable Growth Through Business Innovation",
                TextsOfBlog: [
                    "In today's fast-paced business world, success requires more than just great products—it demands strategic thinking and continuous innovation.",
                    "Discover how companies can embrace innovation to ensure sustainable growth and enhance their competitive advantage.",
                    "By leveraging emerging technologies and adapting to market trends, businesses can create long-term value and stay ahead of the competition."
                ],
            },
            {
                TitleSectionBlog: "The Role of Leadership in Business Innovation",
                TextsOfBlog: [
                    "Effective leadership plays a crucial role in fostering a culture of innovation within organizations.",
                    "Leaders must encourage experimentation, embrace change, and empower teams to think creatively.",
                ],
            },
            {
                TitleSectionBlog: "Practical Strategies for Sustainable Business Growth",
                TextsOfBlog: [
                    "Implementing data-driven decision-making and customer-centric approaches can drive business success.",
                    "Companies should focus on agility, adaptability, and continuous learning to remain competitive.",
                    "Sustainability and ethical business practices are becoming key differentiators in today's market."
                ],
            },
        ],
        ProfileImage: "/images/Blog OPen Page/Profile2.webp",
        Name: "Eleanor Smith",
        Job: "Business Strategist",
        Bio: "Helping businesses navigate innovation and achieve sustainable growth through strategic insights.",
        email: "@eleanorsmith",
        SocialStats: [
            {
                IconSvg: (color) => <LikeIcon color={color} />,
                Description: "Liked By",
                NumberReaction: "5.7",
                Users: "Users",
            },
            {
                IconSvg: <SharedIcon />,
                Description: "Shared BY",
                NumberReaction: "177",
                Users: "Users",
            },
        ]
    },
    {
        id: 3,
        MedaiaBtn: [
            "/images/Blog OPen Page/Twitter.svg",
            "/images/Blog OPen Page/Icon2.svg",
            "/images/Blog OPen Page/Facebok.svg"
        ],
        DetailsOfBlog: [
            {
                TitleSectionBlog: "Optimizing Code Quality for Scalable Applications",
                TextsOfBlog: [
                    "High-quality code is essential for building scalable applications that can handle growth and evolving requirements.",
                    "Following best practices in software development ensures maintainability, efficiency, and long-term success.",
                    "Discover how clean architecture, effective debugging, and performance optimization contribute to robust software solutions."
                ],
            },
            {
                TitleSectionBlog: "Advanced Techniques for Software Performance Optimization",
                TextsOfBlog: [
                    "Performance optimization requires a deep understanding of memory management, algorithm efficiency, and resource utilization.",
                    "Explore strategies to enhance responsiveness and scalability without compromising code readability.",
                ],
            },
            {
                TitleSectionBlog: "Future-Proofing Software Development",
                TextsOfBlog: [
                    "Adapting to emerging technologies ensures that software solutions remain relevant in an ever-changing digital landscape.",
                    "Incorporating modular design and efficient data processing techniques improves application reliability.",
                    "By following industry best practices, developers can create software that withstands evolving user needs and technological shifts."
                ],
            },
        ],
        ProfileImage: "/images/Blog OPen Page/Profile3.webp",
        Name: "David Carter",
        Job: "Software Engineer",
        Bio: "Bridging innovation with technical excellence to build scalable and high-performance software solutions.",
        email: "@davidcarter",
        SocialStats: [
            {
                IconSvg: (color) => <LikeIcon color={color} />,
                Description: "Liked By",
                NumberReaction: "7.5",
                Users: "Users",
            },
            {
                IconSvg: <SharedIcon />,
                Description: "Shared BY",
                NumberReaction: "555",
                Users: "Users",
            },
        ]
    }
    


]