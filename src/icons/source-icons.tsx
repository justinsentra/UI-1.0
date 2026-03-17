import type { ComponentType } from "react";
import type { SourceType } from "@/data/mock-deep-research";
import affinityLogo from "@/assets/logos/affinity.png";

interface SourceIconProps {
  size?: number;
  className?: string;
}

export const GoogleMeetIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 622 512"
    fill="none"
    className={className}
  >
    <g clipPath="url(#gm_c0)">
      <path
        d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z"
        fill="#00832D"
      />
      <path
        d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z"
        fill="#0066DA"
      />
      <path
        d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z"
        fill="#E94235"
      />
      <path
        d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z"
        fill="#2684FC"
      />
      <path
        d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317"
        fill="#00AC47"
      />
      <path
        d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z"
        fill="#00AC47"
      />
      <path
        d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891"
        fill="#FFBA00"
      />
    </g>
    <defs>
      <clipPath id="gm_c0">
        <rect width="621.2" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GoogleCalendarIcon = ({
  size = 14,
  className,
}: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    className={className}
  >
    <g clipPath="url(#gc_c0)">
      <path
        d="M390.736 121.264H121.264V390.736H390.736V121.264Z"
        fill="white"
      />
      <path
        d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z"
        fill="#EA4335"
      />
      <path
        d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z"
        fill="#188038"
      />
      <path
        d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z"
        fill="#1967D2"
      />
      <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04" />
      <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853" />
      <path
        d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z"
        fill="#4285F4"
      />
      <path
        d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z"
        fill="#4285F4"
      />
    </g>
    <defs>
      <clipPath id="gc_c0">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LinearIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      fill="#5E6AD2"
      d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
    />
  </svg>
);

export const SlackIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 2447.6 2452.5"
    className={className}
  >
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
        fill="#36c5f0"
      />
      <path
        d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
        fill="#2eb67d"
      />
      <path
        d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
        fill="#ecb22e"
      />
      <path
        d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
        fill="#e01e5a"
      />
    </g>
  </svg>
);

export const NotionIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 268"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <path
      fill="#FFF"
      d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"
    />
    <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z" />
  </svg>
);

export const AsanaIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 251 232"
    fill="none"
    className={className}
  >
    <path
      fill="#F06A6A"
      d="M179.383 54.3733c0 30.0166-24.337 54.3737-54.354 54.3737-30.0355 0-54.3733-24.3382-54.3733-54.3737S94.9935 0 125.029 0c30.017 0 54.354 24.3378 54.354 54.3733ZM54.3928 122.33c-30.0166 0-54.373269 24.338-54.373269 54.355 0 30.017 24.337769 54.373 54.373269 54.373 30.0354 0 54.3732-24.338 54.3732-54.373 0-30.017-24.3378-54.355-54.3732-54.355Zm141.2532 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"
    />
  </svg>
);

export const DiscordIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 199"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <path
      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      fill="#5865F2"
    />
  </svg>
);

export const GoogleDriveIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg width={size} height={size} viewBox="0 0 87.3 78" className={className}>
    <path
      fill="#0066da"
      d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z"
    />
    <path
      fill="#00ac47"
      d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 53h27.5z"
    />
    <path
      fill="#ea4335"
      d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.798l5.852 11.5z"
    />
    <path
      fill="#00832d"
      d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z"
    />
    <path
      fill="#2684fc"
      d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
    />
    <path
      fill="#ffba00"
      d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z"
    />
  </svg>
);

export const OutlookIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="60 90.4 570.02 539.67"
    className={className}
  >
    <defs>
      <linearGradient
        id="ol_a"
        x1="9.989"
        x2="30.932"
        y1="22.365"
        y2="9.375"
        gradientTransform="scale(15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#20a7fa" />
        <stop offset=".4" stopColor="#3bd5ff" />
        <stop offset="1" stopColor="#c4b0ff" />
      </linearGradient>
      <linearGradient
        id="ol_b"
        x1="17.197"
        x2="28.856"
        y1="26.794"
        y2="8.126"
        gradientTransform="scale(15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#165ad9" />
        <stop offset=".501" stopColor="#1880e5" />
        <stop offset="1" stopColor="#8587ff" />
      </linearGradient>
      <linearGradient
        id="ol_d"
        x1="24.053"
        x2="44.51"
        y1="31.11"
        y2="18.018"
        gradientTransform="scale(15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1a43a6" />
        <stop offset=".492" stopColor="#2052cb" />
        <stop offset="1" stopColor="#5f20cb" />
      </linearGradient>
      <linearGradient
        id="ol_g"
        x1="41.998"
        x2="23.852"
        y1="29.943"
        y2="29.943"
        gradientTransform="scale(15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4dc4ff" />
        <stop offset=".196" stopColor="#0fafff" />
      </linearGradient>
      <radialGradient
        id="ol_j"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(-170.86087 259.7254 -674.01813 -443.40415 278.562 412.979)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#49deff" />
        <stop offset=".724" stopColor="#29c3ff" />
      </radialGradient>
      <radialGradient
        id="ol_l"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(46.924 -378.504 245.25) scale(315.927)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".039" stopColor="#0091ff" />
        <stop offset=".919" stopColor="#183dad" />
      </radialGradient>
    </defs>
    <path
      d="m463.984 140.145-344.347 218.27-29.614-46.72v-40.257a43.26 43.26 0 0 1 19.72-36.293L309.91 105.258c30.496-19.79 69.777-19.793 100.277-.008Z"
      fill="url(#ol_a)"
    />
    <path
      d="M407.102 103.34a91.293 91.293 0 0 1 3.082 1.914l156.214 101.332-387.336 245.52-59.437-93.77L403.895 177.8c26.925-17.102 28.105-55.57 3.207-74.461Z"
      fill="url(#ol_b)"
    />
    <path
      d="M333.602 498.988 179.066 452.11 507.63 243.836c27.672-17.54 27.601-57.938-.133-75.379l-1.48-.93 4.261 2.649 99.996 64.867a43.263 43.263 0 0 1 19.723 36.3v38.962Z"
      fill="url(#ol_d)"
    />
    <path
      d="M315.77 630.05h220.449c51.777 0 93.75-41.972 93.75-93.75V272.14c0 15.301-7.864 29.528-20.82 37.665l-327.907 205.89a60.712 60.712 0 0 0-28.422 51.414c.004 34.762 28.184 62.942 62.95 62.942Z"
      fill="url(#ol_g)"
    />
    <path
      d="M405.402 630.035H183.738c-51.777 0-93.75-41.972-93.75-93.75v-264.34a44.473 44.473 0 0 0 20.754 37.621l327.582 206.52a61.737 61.737 0 0 1 28.809 52.226c-.004 34.09-27.64 61.723-61.73 61.723Z"
      fill="url(#ol_j)"
    />
    <path
      d="M108.75 345h142.5c26.926 0 48.75 21.824 48.75 48.75v142.5c0 26.926-21.824 48.75-48.75 48.75h-142.5C81.824 585 60 563.176 60 536.25v-142.5C60 366.824 81.824 345 108.75 345Z"
      fill="url(#ol_l)"
    />
    <path
      d="M179.387 534c-19.848 0-36.137-6.21-48.875-18.625-12.739-12.414-19.11-28.617-19.11-48.605 0-21.11 6.465-38.18 19.395-51.22C143.73 402.517 160.66 396 181.594 396c19.781 0 35.879 6.238 48.297 18.715 12.484 12.476 18.726 28.93 18.726 49.351 0 20.985-6.469 37.899-19.398 50.75C216.352 527.606 199.742 534 179.387 534Zm.574-26.352c10.816 0 19.523-3.695 26.117-11.082 6.594-7.386 9.89-17.664 9.89-30.824 0-13.719-3.202-24.394-9.6-32.031-6.403-7.637-14.95-11.453-25.638-11.453-11.011 0-19.878 3.941-26.597 11.824-6.723 7.824-10.082 18.191-10.082 31.102 0 13.101 3.36 23.468 10.082 31.101 6.719 7.574 15.328 11.363 25.828 11.363Z"
      fill="#fff"
    />
  </svg>
);

export const ZoomIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <defs>
      <linearGradient
        id="zm_a"
        x1="23.666%"
        x2="76.334%"
        y1="95.6118%"
        y2="4.3882%"
      >
        <stop offset=".00006%" stopColor="#0845BF" />
        <stop offset="19.11%" stopColor="#0950DE" />
        <stop offset="38.23%" stopColor="#0B59F6" />
        <stop offset="50%" stopColor="#0B5CFF" />
        <stop offset="67.32%" stopColor="#0E5EFE" />
        <stop offset="77.74%" stopColor="#1665FC" />
        <stop offset="86.33%" stopColor="#246FF9" />
        <stop offset="93.88%" stopColor="#387FF4" />
        <stop offset="100%" stopColor="#4F90EE" />
      </linearGradient>
    </defs>
    <path
      fill="url(#zm_a)"
      d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"
    />
    <path
      fill="#FFF"
      d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"
    />
  </svg>
);

export const GitHubIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.026 2.748-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

export const GoogleDocsIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

export const EmailIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22 7 12 13 2 7" />
  </svg>
);

export const AffinityIcon = ({ size = 14, className }: SourceIconProps) => (
  <img
    src={affinityLogo}
    width={size}
    height={size}
    className={className}
    alt="Affinity"
  />
);

export const TeamsIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="4 4 36 38"
    className={className}
  >
    <path
      fill="url(#microsoft_teams__a)"
      d="M22 20h12a6 6 0 0 1 6 6v10a6 6 0 0 1-12 0V26a6 6 0 0 0-6-6Z"
    />
    <path
      fill="url(#microsoft_teams__b)"
      d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"
    />
    <path
      fill="url(#microsoft_teams__c)"
      fillOpacity=".7"
      d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"
    />
    <path
      fill="url(#microsoft_teams__d)"
      fillOpacity=".7"
      d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"
    />
    <path
      fill="url(#microsoft_teams__e)"
      d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      fill="url(#microsoft_teams__f)"
      fillOpacity=".46"
      d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      fill="url(#microsoft_teams__g)"
      fillOpacity=".4"
      d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      fill="url(#microsoft_teams__h)"
      d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <path
      fill="url(#microsoft_teams__i)"
      fillOpacity=".6"
      d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <path
      fill="url(#microsoft_teams__j)"
      fillOpacity=".5"
      d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <rect
      width="16"
      height="16"
      x="4"
      y="23"
      fill="url(#microsoft_teams__k)"
      rx="3.25"
    />
    <rect
      width="16"
      height="16"
      x="4"
      y="23"
      fill="url(#microsoft_teams__l)"
      fillOpacity=".7"
      rx="3.25"
    />
    <path
      fill="#fff"
      d="M15.48 28.105h-2.448v7.466h-2.065v-7.466H8.52V26.43h6.96v1.676Z"
    />
    <defs>
      <radialGradient
        id="microsoft_teams__a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(13.4784 0 0 33.2694 39.797 22.174)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A98AFF" />
        <stop offset=".14" stopColor="#8C75FF" />
        <stop offset=".565" stopColor="#5F50E2" />
        <stop offset=".9" stopColor="#3C2CB8" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__b"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(12.1875 30.39997 -30.74442 12.3256 8.812 16.4)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#85C2FF" />
        <stop offset=".69" stopColor="#7588FF" />
        <stop offset="1" stopColor="#6459FE" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__d"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(113.326 8.093 17.645) scale(19.2186 15.4273)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD96FF" />
        <stop offset=".687" stopColor="#BD96FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__e"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 -10 12.6216 0 33 11.571)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".268" stopColor="#6868F7" />
        <stop offset="1" stopColor="#3923B1" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__f"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(5.47024 4.59847 -6.65117 7.91208 28.867 10.544)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".271" stopColor="#A1D3FF" />
        <stop offset=".813" stopColor="#A1D3FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__g"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-41.658 32.118 -43.42) scale(8.51275 20.8824)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3ACFD" />
        <stop offset=".816" stopColor="#9FA2FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__h"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 -12 15.146 0 18 8.286)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".268" stopColor="#8282FF" />
        <stop offset="1" stopColor="#3923B1" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__i"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(40.052 -3.155 21.416) scale(8.57554 12.4035)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".271" stopColor="#A1D3FF" />
        <stop offset=".813" stopColor="#A1D3FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__j"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-41.658 20.382 -26.516) scale(10.2153 25.0589)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3ACFD" />
        <stop offset=".816" stopColor="#9FA2FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__k"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(45 -25.763 16.328) scale(22.6274)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".047" stopColor="#688EFF" />
        <stop offset=".947" stopColor="#230F94" />
      </radialGradient>
      <radialGradient
        id="microsoft_teams__l"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 11.2 -13.0702 0 12 32.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".571" stopColor="#6965F6" stopOpacity="0" />
        <stop offset="1" stopColor="#8F8FFF" />
      </radialGradient>
      <linearGradient
        id="microsoft_teams__c"
        x1="20.594"
        x2="20.594"
        y1="18"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".801" stopColor="#6864F6" stopOpacity="0" />
        <stop offset="1" stopColor="#5149DE" />
      </linearGradient>
    </defs>
  </svg>
);

export const SharePointIcon = ({ size = 14, className }: SourceIconProps) => (
  <svg width={size} height={size} viewBox="0 0 450 500" className={className}>
    <defs>
      <radialGradient
        id="microsoft_sharepoint__b"
        cx="-777.14"
        cy="770.84"
        r=".9"
        fx="-777.14"
        fy="770.84"
        gradientTransform="matrix(-98.02204 -236.87999 -426.55553 175.97802 252868.13 -319393.72)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".29" stopColor="#003b5d" />
        <stop offset=".61" stopColor="#004a6c" stopOpacity=".69" />
        <stop offset=".97" stopColor="#006f94" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__c"
        cx="-785.23"
        cy="766.9"
        r=".9"
        fx="-785.23"
        fy="766.9"
        gradientTransform="matrix(-81.36865 -200.4872 -360.58286 145.8959 212855.73 -269057.38)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".26" stopColor="#002a42" />
        <stop offset=".61" stopColor="#004261" stopOpacity=".69" />
        <stop offset=".97" stopColor="#006f94" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__d"
        cx="-739.84"
        cy="872.71"
        r=".9"
        fx="-739.84"
        fy="872.71"
        gradientTransform="matrix(-102.53313 149.24243 149.46801 102.38138 -206024.5 21094.22)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#78edff" />
        <stop offset="1" stopColor="#2ccfca" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__f"
        cx="-746.38"
        cy="743.75"
        r=".9"
        fx="-746.38"
        fy="743.75"
        gradientTransform="matrix(56.60729 -162.28035 -292.83982 -101.83188 260296.26 -45019.25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#003b5d" />
        <stop offset=".49" stopColor="#004c6c" stopOpacity=".72" />
        <stop offset=".97" stopColor="#007a86" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__g"
        cx="-741.46"
        cy="888.91"
        r=".9"
        fx="-741.46"
        fy="888.91"
        gradientTransform="matrix(-85.44333 124.36732 124.55255 85.31498 -173675.69 16546.9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#78edff" />
        <stop offset="1" stopColor="#2ccfca" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__j"
        cx="-686.6"
        cy="804.18"
        r=".9"
        fx="-686.6"
        fy="804.18"
        gradientTransform="matrix(222.887 222.57601 222.92613 -222.53738 -26208.17 332025.54)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".06" stopColor="#00b6bd" />
        <stop offset=".89" stopColor="#00495c" />
      </radialGradient>
      <radialGradient
        id="microsoft_sharepoint__k"
        cx="-686.07"
        cy="864.41"
        r=".9"
        fx="-686.07"
        fy="864.41"
        gradientTransform="matrix(0 155.79 177.62 0 -153439.14 107241.64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".57" stopColor="#1e8581" stopOpacity="0" />
        <stop offset=".97" stopColor="#1ecbe6" />
      </radialGradient>
      <linearGradient
        id="microsoft_sharepoint__a"
        x1="92.18"
        x2="292.29"
        y1="477.48"
        y2="214.84"
        gradientTransform="matrix(1 0 0 -1 0 502)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00e3df" />
        <stop offset=".41" stopColor="#0097a8" />
        <stop offset="1" stopColor="#007791" />
      </linearGradient>
      <linearGradient
        id="microsoft_sharepoint__e"
        x1="245.14"
        x2="411.9"
        y1="331.57"
        y2="112.7"
        gradientTransform="matrix(1 0 0 -1 0 502)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00e3df" />
        <stop offset=".48" stopColor="#00a2b8" />
        <stop offset=".95" stopColor="#00637c" />
      </linearGradient>
      <linearGradient
        id="microsoft_sharepoint__h"
        x1="153.42"
        x2="259.71"
        y1="214.53"
        y2="1.97"
        gradientTransform="matrix(1 0 0 -1 0 502)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".05" stopColor="#75fff6" />
        <stop offset=".51" stopColor="#00c7d1" />
        <stop offset=".96" stopColor="#0096ad" />
      </linearGradient>
      <linearGradient
        id="microsoft_sharepoint__i"
        x1="292.44"
        x2="235.63"
        y1="-12.27"
        y2="67.45"
        gradientTransform="matrix(1 0 0 -1 0 502)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".26" stopColor="#0e5a5d" />
        <stop offset=".54" stopColor="#126c6b" stopOpacity=".69" />
        <stop offset=".97" stopColor="#1c948a" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M187.79 300c82.97 0 150.23-67.16 150.23-150S270.75 0 187.79 0 37.56 67.16 37.56 150s67.26 150 150.23 150Z"
      style={{ fill: "url(#microsoft_sharepoint__a)" }}
    />
    <path
      d="M187.79 300c82.97 0 150.23-67.16 150.23-150S270.75 0 187.79 0 37.56 67.16 37.56 150s67.26 150 150.23 150Z"
      style={{ fill: "url(#microsoft_sharepoint__b)", fillOpacity: 0.2 }}
    />
    <path
      d="M187.79 300c82.97 0 150.23-67.16 150.23-150S270.75 0 187.79 0 37.56 67.16 37.56 150s67.26 150 150.23 150Z"
      style={{ fill: "url(#microsoft_sharepoint__c)", fillOpacity: 0.31 }}
    />
    <path
      d="M187.79 300c82.97 0 150.23-67.16 150.23-150S270.75 0 187.79 0 37.56 67.16 37.56 150s67.26 150 150.23 150Z"
      style={{ fill: "url(#microsoft_sharepoint__d)", fillOpacity: 0.7 }}
    />
    <path
      d="M324.81 400C393.95 400 450 344.04 450 275s-56.05-125-125.19-125-125.19 55.96-125.19 125 56.05 125 125.19 125Z"
      style={{ fill: "url(#microsoft_sharepoint__e)" }}
    />
    <path
      d="M324.81 400C393.95 400 450 344.04 450 275s-56.05-125-125.19-125-125.19 55.96-125.19 125 56.05 125 125.19 125Z"
      style={{ fill: "url(#microsoft_sharepoint__f)", fillOpacity: 0.5 }}
    />
    <path
      d="M324.81 400C393.95 400 450 344.04 450 275s-56.05-125-125.19-125-125.19 55.96-125.19 125 56.05 125 125.19 125Z"
      style={{ fillOpacity: 0.7, fill: "url(#microsoft_sharepoint__g)" }}
    />
    <path
      d="M206.56 500c58.77 0 106.41-47.57 106.41-106.25S265.33 287.5 206.56 287.5s-106.41 47.57-106.41 106.25S147.79 500 206.56 500Z"
      style={{ fill: "url(#microsoft_sharepoint__h)" }}
    />
    <path
      d="M206.56 500c58.77 0 106.41-47.57 106.41-106.25S265.33 287.5 206.56 287.5s-106.41 47.57-106.41 106.25S147.79 500 206.56 500Z"
      style={{ fill: "url(#microsoft_sharepoint__i)", fillOpacity: 0.32 }}
    />
    <rect
      width="200.3"
      height="200"
      y="237.5"
      rx="40.66"
      ry="40.66"
      style={{ fill: "url(#microsoft_sharepoint__j)" }}
    />
    <rect
      width="200.3"
      height="200"
      y="237.5"
      rx="40.66"
      ry="40.66"
      style={{ fill: "url(#microsoft_sharepoint__k)", fillOpacity: 0.6 }}
    />
    <path
      d="m57 372.15 21.72-11.32c2.45 4.94 5.64 8.58 9.58 10.92 3.99 2.34 8.36 3.51 13.09 3.51 5.27 0 9.29-1.06 12.05-3.19 2.77-2.18 4.15-5.45 4.15-9.8 0-3.4-1.33-6.27-3.99-8.61-2.66-2.39-7.37-4.2-14.13-5.42-12.88-2.34-22.25-6.43-28.1-12.28-5.8-5.85-8.7-13.13-8.7-21.84 0-10.84 3.83-19.5 11.5-25.99 7.66-6.48 17.78-9.72 30.34-9.72 8.46 0 15.91 1.73 22.35 5.18 6.44 3.45 11.55 8.4 15.33 14.83l-21.23 10.92c-2.34-3.61-4.87-6.22-7.58-7.81-2.72-1.65-6.12-2.47-10.22-2.47-4.9 0-8.62 1.06-11.18 3.19-2.5 2.13-3.75 4.89-3.75 8.29 0 2.92 1.2 5.5 3.59 7.73 2.45 2.18 7.34 3.96 14.69 5.34 12.35 2.34 21.56 6.59 27.62 12.76 6.12 6.11 9.18 13.84 9.18 23.2 0 11.37-3.65 20.38-10.94 27.02-7.29 6.64-17.7 9.96-31.21 9.96-9.79 0-18.63-2.13-26.5-6.38-7.82-4.3-13.7-10.31-17.64-18.02Z"
      style={{ fill: "#fff" }}
    />
  </svg>
);

const SOURCE_ICON_MAP: Record<SourceType, ComponentType<SourceIconProps>> = {
  slack: SlackIcon,
  linear: LinearIcon,
  github: GitHubIcon,
  zoom: ZoomIcon,
  "google-docs": GoogleDocsIcon,
  "google-meet": GoogleMeetIcon,
  "google-calendar": GoogleCalendarIcon,
  "google-drive": GoogleDriveIcon,
  notion: NotionIcon,
  asana: AsanaIcon,
  discord: DiscordIcon,
  outlook: OutlookIcon,
  email: EmailIcon,
  affinity: AffinityIcon,
  teams: TeamsIcon,
  sharepoint: SharePointIcon,
};

export const getSourceIcon = (
  type: SourceType,
): ComponentType<SourceIconProps> => SOURCE_ICON_MAP[type];
