export type Locale = "ko" | "en";

type Localized<T> = Record<Locale, T>;

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  problem: string;
  role: string;
  result: string;
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface PortfolioContent {
  nav: {
    about: string;
    skills: string;
    projects: string;
  };
  profile: {
    name: string;
    role: string;
    headline: string;
    summary: string;
    avatarUrl: string;
    githubUrl: string;
  };
  signals: {
    label: string;
    value: string;
  }[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: {
      title: string;
      body: string;
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: Project[];
  };
}

export const portfolio: Localized<PortfolioContent> = {
  ko: {
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
    },
    profile: {
      name: "Yeonghun Cho",
      role: "Software Developer",
      headline: "제품의 흐름과 구현의 디테일을 함께 다루는 개발자",
      summary:
        "React 기반 웹 인터페이스, 배포 자동화, 유지보수 가능한 프론트엔드 구조에 관심을 두고 문제를 작게 나누어 안정적으로 완성합니다.",
      avatarUrl: "https://avatars.githubusercontent.com/u/175099368?v=4",
      githubUrl: "https://github.com/yeonghun-cho",
    },
    signals: [
      {
        label: "Focus",
        value: "Frontend Engineering",
      },
      {
        label: "Build",
        value: "React + TypeScript",
      },
      {
        label: "Deploy",
        value: "GitHub Pages",
      },
    ],
    about: {
      eyebrow: "About",
      title: "명확한 구조와 검증 가능한 결과를 우선합니다.",
      body:
        "사용자가 실제로 만나는 화면부터 배포 파이프라인까지 하나의 제품 흐름으로 보고, 작은 결정이 장기 유지보수에 미치는 영향을 고려합니다.",
      highlights: [
        {
          title: "읽히는 인터페이스",
          body:
            "정보의 우선순위와 반응형 레이아웃을 정리해 빠르게 이해되는 화면을 만듭니다.",
        },
        {
          title: "작게 나눈 구현",
          body:
            "데이터, 컴포넌트, 스타일의 책임을 분리해 변경 비용을 낮춥니다.",
        },
        {
          title: "배포 가능한 완성도",
          body:
            "빌드와 배포 과정을 자동화해 결과물을 반복해서 확인할 수 있게 합니다.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "웹 제품을 만들고 운영하기 위한 기본기를 갖춥니다.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "TypeScript", "Responsive UI", "Accessibility"],
        },
        {
          title: "Product UI",
          items: ["Component Design", "Information Architecture", "CSS Systems"],
        },
        {
          title: "Delivery",
          items: ["Vite", "GitHub Actions", "GitHub Pages", "Version Control"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "문제, 역할, 결과가 보이는 프로젝트를 정리합니다.",
      items: [
        {
          title: "Developer Portfolio Website",
          problem:
            "GitHub Pages에서 빠르게 열리고 유지보수하기 쉬운 개인 포트폴리오가 필요했습니다.",
          role:
            "Vite와 React 기반의 단일 페이지 구조, 다국어 데이터 모델, 자동 배포 워크플로를 설계하고 구현했습니다.",
          result:
            "프로필, 소개, 기술 스택, 프로젝트를 구조화된 데이터로 관리하며 GitHub Actions로 정적 사이트를 배포합니다.",
          tech: ["React", "TypeScript", "Vite", "GitHub Pages"],
          links: [
            {
              label: "Repository",
              href: "https://github.com/yeonghun-cho/yeonghun-cho.github.io",
            },
            {
              label: "Live Site",
              href: "https://yeonghun-cho.github.io",
            },
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
    },
    profile: {
      name: "Yeonghun Cho",
      role: "Software Developer",
      headline: "A developer who connects product flow with implementation detail",
      summary:
        "I focus on React interfaces, deployment automation, and maintainable frontend structure, breaking problems down into practical, verifiable increments.",
      avatarUrl: "https://avatars.githubusercontent.com/u/175099368?v=4",
      githubUrl: "https://github.com/yeonghun-cho",
    },
    signals: [
      {
        label: "Focus",
        value: "Frontend Engineering",
      },
      {
        label: "Build",
        value: "React + TypeScript",
      },
      {
        label: "Deploy",
        value: "GitHub Pages",
      },
    ],
    about: {
      eyebrow: "About",
      title: "I prioritize clear structure and verifiable outcomes.",
      body:
        "I treat the user-facing interface, implementation details, and deployment path as one product flow, with attention to how small decisions affect long-term maintenance.",
      highlights: [
        {
          title: "Readable interfaces",
          body:
            "I organize information priority and responsive layout so screens are fast to scan.",
        },
        {
          title: "Small implementation units",
          body:
            "I separate data, components, and styling responsibilities to keep change costs low.",
        },
        {
          title: "Deployable finish",
          body:
            "I automate build and deployment steps so the result can be checked repeatedly.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Core capabilities for building and shipping web products.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "TypeScript", "Responsive UI", "Accessibility"],
        },
        {
          title: "Product UI",
          items: ["Component Design", "Information Architecture", "CSS Systems"],
        },
        {
          title: "Delivery",
          items: ["Vite", "GitHub Actions", "GitHub Pages", "Version Control"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work framed by problem, role, and outcome.",
      items: [
        {
          title: "Developer Portfolio Website",
          problem:
            "A personal portfolio needed to load quickly on GitHub Pages and stay easy to maintain.",
          role:
            "Designed and implemented a Vite + React single-page site, bilingual data model, and automated deployment workflow.",
          result:
            "The site manages profile, about, skills, and project content through structured data and deploys as a static site through GitHub Actions.",
          tech: ["React", "TypeScript", "Vite", "GitHub Pages"],
          links: [
            {
              label: "Repository",
              href: "https://github.com/yeonghun-cho/yeonghun-cho.github.io",
            },
            {
              label: "Live Site",
              href: "https://yeonghun-cho.github.io",
            },
          ],
        },
      ],
    },
  },
};
