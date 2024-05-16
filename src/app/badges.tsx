import { ComponentPropsWithoutRef, Fragment } from "react";
import Badge from "~/components/Badge";
import { cn } from "~/utils/cn";

const badgeIcons = {
  mail: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPgogIDxwYXRoIGQ9Ik0xLjUgOC42N3Y4LjU4YTMgMyAwIDAgMCAzIDNoMTVhMyAzIDAgMCAwIDMtM1Y4LjY3bC04LjkyOCA1LjQ5M2EzIDMgMCAwIDEtMy4xNDQgMEwxLjUgOC42N1oiIC8+CiAgPHBhdGggZD0iTTIyLjUgNi45MDhWNi43NWEzIDMgMCAwIDAtMy0zaC0xNWEzIDMgMCAwIDAtMyAzdi4xNThsOS43MTQgNS45NzhhMS41IDEuNSAwIDAgMCAxLjU3MiAwTDIyLjUgNi45MDhaIiAvPgo8L3N2Zz4K",
  phone:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSA0LjVhMyAzIDAgMCAxIDMtM2gxLjM3MmMuODYgMCAxLjYxLjU4NiAxLjgxOSAxLjQybDEuMTA1IDQuNDIzYTEuODc1IDEuODc1IDAgMCAxLS42OTQgMS45NTVsLTEuMjkzLjk3Yy0uMTM1LjEwMS0uMTY0LjI0OS0uMTI2LjM1MmExMS4yODUgMTEuMjg1IDAgMCAwIDYuNjk3IDYuNjk3Yy4xMDMuMDM4LjI1LjAwOS4zNTItLjEyNmwuOTctMS4yOTNhMS44NzUgMS44NzUgMCAwIDEgMS45NTUtLjY5NGw0LjQyMyAxLjEwNWMuODM0LjIwOSAxLjQyLjk1OSAxLjQyIDEuODJWMTkuNWEzIDMgMCAwIDEtMyAzaC0yLjI1QzguNTUyIDIyLjUgMS41IDE1LjQ0OCAxLjUgNi43NVY0LjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+Cjwvc3ZnPgo=",
  unionJack:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+CjxjbGlwUGF0aCBpZD0icyI+Cgk8cGF0aCBkPSJNMCwwIHYzMCBoNjAgdi0zMCB6Ii8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0idCI+Cgk8cGF0aCBkPSJNMzAsMTUgaDMwIHYxNSB6IHYxNSBoLTMwIHogaC0zMCB2LTE1IHogdi0xNSBoMzAgeiIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjcykiPgoJPHBhdGggZD0iTTAsMCB2MzAgaDYwIHYtMzAgeiIgZmlsbD0iIzAxMjE2OSIvPgoJPHBhdGggZD0iTTAsMCBMNjAsMzAgTTYwLDAgTDAsMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2Ii8+Cgk8cGF0aCBkPSJNMCwwIEw2MCwzMCBNNjAsMCBMMCwzMCIgY2xpcC1wYXRoPSJ1cmwoI3QpIiBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNCIvPgoJPHBhdGggZD0iTTMwLDAgdjMwIE0wLDE1IGg2MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIi8+Cgk8cGF0aCBkPSJNMzAsMCB2MzAgTTAsMTUgaDYwIiBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNiIvPgo8L2c+PC9zdmc+",
  czech:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4KCTxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZDcxNDFhIi8+Cgk8cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2ZmZiIvPgoJPHBhdGggZD0iTSA0NTAsMzAwIDAsMCBWIDYwMCB6IiBmaWxsPSIjMTE0NTdlIi8+Cjwvc3ZnPg==",
  reactHookForm:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE1LjY2NiAzLjg4OEEyLjI1IDIuMjUgMCAwIDAgMTMuNSAyLjI1aC0zYy0xLjAzIDAtMS45LjY5My0yLjE2NiAxLjYzOG03LjMzMiAwYy4wNTUuMTk0LjA4NC40LjA4NC42MTJ2MGEuNzUuNzUgMCAwIDEtLjc1Ljc1SDlhLjc1Ljc1IDAgMCAxLS43NS0uNzV2MGMwLS4yMTIuMDMtLjQxOC4wODQtLjYxMm03LjMzMiAwYy42NDYuMDQ5IDEuMjg4LjExIDEuOTI3LjE4NCAxLjEuMTI4IDEuOTA3IDEuMDc3IDEuOTA3IDIuMTg1VjE5LjVhMi4yNSAyLjI1IDAgMCAxLTIuMjUgMi4yNUg2Ljc1QTIuMjUgMi4yNSAwIDAgMSA0LjUgMTkuNVY2LjI1N2MwLTEuMTA4LjgwNi0yLjA1NyAxLjkwNy0yLjE4NWE0OC4yMDggNDguMjA4IDAgMCAxIDEuOTI3LS4xODQiIC8+Cjwvc3ZnPgo=",
  zustand:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAn5JREFUOE+Vk8lPE1Ecx79vZtoBuiAWLFyECtqERQuJLNoQFxYxEC9o4gGjxpMHT8bg3+CCiSe9eDDRix7UBE1EDsKBGkTDUmiLEAJYEDrt1Cl0uswzfZhKbT34Dm/9fT/5vff9PYL/aKIoVqmqOr9bQnYvDAaDNRKJrOdinnQ2ag6zSKeUODf0cSytS096e9qpFJSx4l+HyWi4GZLDdztPNWHOt4xZ7wL6O46iYX954vbbYWF0wpsNONHSQO+fdSauPXstFBVbwXEEPMchkdRQVlwI/6aMYCgMQSfA9XkyG+BsdNA7XccStwZHBTG/gN1CJ/CIJ5KglIIjBBTAqn8ds77FLABpa23WRGhUBUf0OgGxeIJBDh+ygWpa+lnG3T4okS064/FdiMWSLxipu+M4jUaT6aAptwd11Xa0OOxQlCj6dXO45BZRfdDGYkbGJzBwrjN45t7jndc83dpMM+z4jaqrKs8w5Pmb97jY046xKQ/6Giql649eWpiurbU5dT3WLh+x0YHhT8S8xwKH3YZXH0ahJZPQ63X4sSnhSm83Rr644Zv/9k7+udWVAVhaXsWD823azIZEBr3fSb39AIOWeF0I1ToRj8XZ2jXjweTk7A1lW32YlcHunGVFgdNRg761aTwtrWVHQ66vMOSLGBvfsZJ1NfZKWmYtSWtFvQA1loBGKaIxFbIcAaUaCs0mNgYCEnyLK38AKaWzqZ4KvABB4NOgUksh1gIyq4MUTI3FEQ7LmJ5byFGJFRV5kb2mbZOhgBUPSYVQgBACsyEPG8EQq0TP/FKGYVnuFZmNSes+C2c0GsHzPEtZCkjwb0hPIlvRq39/tFz25/qM/9z7Bfp0C/GcMeu5AAAAAElFTkSuQmCC",
  emotion:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAUVJREFUOE+lkzFOw1AQRN9QcAcuAUpLQYgQF6FMRUFPoEeio6AEIRSJio6GIG4ADReAG1BFYsl8/R++HccNX7Jsr3dnZ2fHouNExD7gaxfYAm6BG0lf7XT1ADy3vn0DR5KmdXwFICJceJaTTjOTuuZE0kUJNAAiYgK4yGcmaZTHqdn8AANJb05qA9wDH1X3kaRZZuWwdXHOnaTHLoAH4B0Yeoxc7CKz8lhmMpe02TeCvw1N3w+xmMvjVIB+35bkRisjlG61aI4Z4EXSJCKOJV2uY2BNTNcFPo1VaoHwHx+4Nona64M8t2m7e0lOYxRdOgEiYgPYq4xT/NBmPZZ0tU4Di7PT4b6Sn8QEziXZUH9biIhr4DMrXbbhe3Jl9kGJz4EDSa9LVSPiCTjMBTaRV5a2kC3t5wK4FLNt5TqpdDVG/VM1xPwF9bmMEVVTiDAAAAAASUVORK5CYII=",
  typeORM:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAY1JREFUWEfllr1NA0EQhb+XE7gICrALgBYwJSAawCkBKQlCZCT8iApwDVCAEcRIdGCEkBABGhhrTzqt9s6+tfBasOHdzsybNz/7ROGjwvFZfwBmNgJOgZGks0UZMzPzu5Jak2z9WTkJQbMAzAPRCMDMesAUeJa0uWjm9XtmdgsMgUNJxykfbQCSFJrZG/AVOes1UT2vFDkA+sAkzuZ/AZD0ENV6Vq5Uw/1KCVIA/lYJ6vMfZxbthor5bUn3qTFr8zUrWVcjMztI2JxL+mzwdQHsNy2k3DF8iYJNV9oDxZuwOIDim7A4A6sCsAXcAWNJuznPsdtkr+K6cRFBUmVc22RZimgpSZZLexe79VTF8YPjNEbfXgHXjH7GP3thJwhgv+dqqR9s3iVthH46SKnq1rcgOHFR6eKyOoPaInKZfiXpKQRxuXYtaRAA+/ScAJfARxaAahoiFlwRzbJMKCP/d+PBzGwoyRnyccxjIAFg4IuoVhIPcAQ8BpCTwIBL+r1sAF06eZm76zkFy2TU1fYb11RiMAYPUKkAAAAASUVORK5CYII=",
  copilot:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAbhJREFUOE+l082Lz1EUx/HXmQUzsrDxEEUK28HKQlkQZTEb5KH4ByxkpCYpzIKEZspfMBGZWMjCcykWNsJ2SKGk2GJmdX3PdO/0QzZ8N9/uPee87+c8hf/8osWXUlbgBLZiLT5hDH04guV4g0c4GxFpNwsopSzEayzDXbzFeuyoD9yr9jXYWeGDEfGtAfbhOrZHxMMKnY/p5GMgImbqfUITuDciJhtgBOfQ3+M4gO8VsCAiEpZq+/Gjg49ExPkGGMYlLImIL9VxDyZrCrsj4la9X4rPGI6IsQYYwu2ugE/xuNbiIN5VwGpcrYHbukJuxlBE3IlSyiLcyPzxASuRKp7gaAWMYwsW4z1W4f5sHUopE91LhzK9iOgrJX+Rhfvja7ZSSrNPJCCrO68BevI/FhGb6vk5LkbEzXpugJkEtMOsgupwugOeSik9AWe6Y95nJ+YUJiCnKwekF5ApnYyIdTUgfUYj4spvgKkEZHBKG8Q1XIiIV3+pwQYcx368xK4mMYdmtKv+4Zw6TOEZPlZQdiZblzuSQ3S5pjg9t0xVWrbpQN2BjbVtmW+29QUepMqI+NoU/gL4l83+CcWavZ9qHwGbAAAAAElFTkSuQmCC",
};

type TBadgeCollection = ComponentPropsWithoutRef<typeof Badge>[];

function BadgeCollection({ badges }: { badges: TBadgeCollection }) {
  return (
    <div className="flex flex-wrap gap-1">
      {badges.map((badge, index) => (
        <Fragment key={badge.label}>
          {index > 0 && <span className="screen:hidden">{" • "}</span>}
          <Badge {...badge} />
        </Fragment>
      ))}
    </div>
  );
}

export const contactBadges = (
  <BadgeCollection
    badges={[
      {
        label: "filip@kalny.net",
        logo: badgeIcons.mail,
        href: "mailto:filip@kalny.net",
        printContent: "E-mail: filip@kalny.net",
        color: "#CF4462",
        variant: "for-the-badge",
      },
      {
        label: "+420 605 501 785",
        logo: badgeIcons.phone,
        color: "#c2ac20",
        printContent: "Phone: +420 605 501 785",
        variant: "for-the-badge",
        href: "tel:+420605501785",
      },
      {
        label: "Signal",
        href: "https://signal.me/#eu/lFOYxORo/LmI1L+XCERaYqMkASrbNUF9wbf18DxHg7/th/LZOFRO5rSGloRse5BE",
        printContent: "Signal: @totalolage.01",
        color: "#3A76F0",
        variant: "for-the-badge",
        logo: "signal",
        logoColor: "white",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/filip-kalny/",
        printContent: "LinkedIn: @filip-kalny",
        color: "#0077B5",
        variant: "for-the-badge",
        logo: "linkedin",
        logoColor: "white",
      },
      {
        label: "GitHub",
        href: "https://github.com/totalolage",
        printContent: "GitHub: @totalolage",
        color: "#181717",
        variant: "for-the-badge",
        logo: "github",
        logoColor: "white",
      },
    ]}
  />
);

export const languageBadges = (
  <BadgeCollection
    badges={[
      {
        label: "English C2",
        href: "https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels",
        color: "#C8102E",
        logo: badgeIcons.unionJack,
        variant: "flat-square",
      },
      {
        label: "Czech native",
        href: "https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels",
        color: "#11457E",
        logo: badgeIcons.czech,
        variant: "flat-square",
      },
      {
        label: "TypeScript",
        href: "https://www.typescriptlang.org/",
        color: "#007ACC",
        variant: "plastic",
        logo: "typescript",
        logoColor: "white",
      },
      {
        label: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "#F7DF1E",
        variant: "plastic",
        logo: "javascript",
        logoColor: "black",
      },
      {
        label: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "#E34F26",
        variant: "plastic",
        logo: "html5",
        logoColor: "white",
      },
      {
        label: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "#1572B6",
        variant: "plastic",
        logo: "css3",
        logoColor: "white",
      },
      {
        label: "Bash",
        href: "https://www.gnu.org/software/bash/",
        color: "#4EAA25",
        variant: "plastic",
        logo: "gnu-bash",
        logoColor: "white",
      },
    ]}
  />
);

export const frameworkBadges = (
  <BadgeCollection
    badges={[
      {
        label: "Next.js",
        href: "https://nextjs.org/",
        color: "#000000",
        variant: "plastic",
        logo: "next.js",
        logoColor: "white",
      },
      {
        label: "React",
        href: "https://reactjs.org/",
        color: "#58C4DC",
        variant: "plastic",
        logo: "react",
        logoColor: "white",
      },
      {
        label: "Express",
        href: "https://expressjs.com/",
        color: "#000000",
        variant: "plastic",
        logo: "express",
        logoColor: "white",
      },
    ]}
  />
);

export const libraryBadges = (
  <BadgeCollection
    badges={[
      {
        label: "React Hook Form",
        href: "https://react-hook-form.com/",
        color: "#EC5990",
        variant: "plastic",
        logo: badgeIcons.reactHookForm,
      },
      {
        label: "Zod",
        href: "https://zod.dev/",
        color: "#EA4AAA",
        variant: "plastic",
        logo: "zod",
        logoColor: "white",
      },
      {
        label: "React Query",
        href: "https://react-query.tanstack.com/",
        color: "#FF4154",
        variant: "plastic",
        logo: "react-query",
        logoColor: "white",
      },
      {
        label: "GraphQL",
        href: "https://graphql.org/",
        color: "#E10098",
        variant: "plastic",
        logo: "graphql",
        logoColor: "white",
      },
      {
        label: "Zustand",
        href: "https://zustand.surge.sh/",
        color: "#FFBE58",
        variant: "plastic",
        logo: badgeIcons.zustand,
      },
      {
        label: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        color: "#16B8DC",
        variant: "plastic",
        logo: "tailwind-css",
        logoColor: "white",
      },
      {
        label: "i18next",
        href: "https://www.i18next.com/",
        color: "#009788",
        variant: "plastic",
        logo: "i18next",
        logoColor: "white",
      },
      {
        label: "Emotion",
        href: "https://emotion.sh/",
        color: "#D36AC2",
        variant: "plastic",
        logo: badgeIcons.emotion,
      },
      {
        label: "Jest",
        href: "https://jestjs.io/",
        color: "#C21325",
        variant: "plastic",
        logo: "jest",
        logoColor: "white",
      },
      {
        label: "React Testing Library",
        href: "https://testing-library.com/",
        color: "#E33332",
        variant: "plastic",
        logo: "testing-library",
        logoColor: "white",
      },
      {
        label: "Axios",
        href: "https://axios-http.com/",
        color: "#373747",
        variant: "plastic",
        logo: "axios",
        logoColor: "white",
      },
      {
        label: "Storybook",
        href: "https://storybook.js.org/",
        color: "#FF4785",
        variant: "plastic",
        logo: "storybook",
        logoColor: "white",
      },
      {
        label: "TypeORM",
        href: "https://typeorm.io/",
        color: "#202021",
        variant: "plastic",
        logo: badgeIcons.typeORM,
      },
    ]}
  />
);

export const toolBadges = (
  <BadgeCollection
    badges={[
      {
        label: "Git",
        href: "https://git-scm.com/",
        color: "#F05032",
        variant: "plastic",
        logo: "git",
        logoColor: "white",
      },
      {
        label: "NeoVim",
        href: "https://neovim.io/",
        color: "#57A143",
        variant: "plastic",
        logo: "neovim",
        logoColor: "white",
      },
      {
        label: "Arch Linux",
        href: "https://archlinux.org/",
        color: "#1793D1",
        variant: "plastic",
        logo: "arch-linux",
        logoColor: "white",
      },
      {
        label: "Docker",
        href: "https://www.docker.com/",
        color: "#2496ED",
        variant: "plastic",
        logo: "docker",
        logoColor: "white",
      },
      {
        label: "Figma",
        href: "https://figma.com/",
        color: "#F24E1E",
        variant: "plastic",
        logo: "figma",
        logoColor: "white",
      },
      {
        label: "Node.js",
        href: "https://nodejs.org/",
        color: "#339933",
        variant: "plastic",
        logo: "node.js",
        logoColor: "white",
      },
      {
        label: "GitHub",
        href: "https://github.com",
        color: "#181717",
        variant: "plastic",
        logo: "github",
        logoColor: "white",
      },
      {
        label: "Copilot",
        href: "https://copilot.github.com/",
        color: "#8957E5",
        variant: "plastic",
        logo: badgeIcons.copilot,
      },
      {
        label: "Vercel",
        href: "https://vercel.com/",
        color: "#000000",
        variant: "plastic",
        logo: "vercel",
        logoColor: "white",
      },
      {
        label: "Nginx",
        href: "https://www.nginx.com/",
        color: "#269539",
        variant: "plastic",
        logo: "nginx",
        logoColor: "white",
      },
      {
        label: "NX",
        href: "https://nx.dev/",
        color: "#000000",
        variant: "plastic",
        logo: "nx",
        logoColor: "white",
      },
      {
        label: "Bun",
        href: "https://bun.sh/",
        color: "#14151A",
        variant: "plastic",
        logo: "bun",
        logoColor: "white",
      },
      {
        label: "Ubuntu",
        href: "https://ubuntu.com/",
        color: "#E95420",
        variant: "plastic",
        logo: "ubuntu",
        logoColor: "white",
      },
      {
        label: "TurboRepo",
        href: "https://turborepo.build/",
        color: "#1C0F23",
        variant: "plastic",
        logo: "turborepo",
        logoColor: "white",
      },
      {
        label: "DigitalOcean",
        href: "https://www.digitalocean.com/",
        color: "#0080FF",
        variant: "plastic",
        logo: "digitalocean",
        logoColor: "white",
      },
    ]}
  />
);
