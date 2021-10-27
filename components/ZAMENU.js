import { styles } from "@/public/js/styles";

export default function ZAMENU({ size }) {
  return (
    <>
      <div className="TopBar">
        <div className="logoTxt">
          <svg
            width="218"
            height="90"
            viewBox="0 0 218 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="96"
              y1="21"
              x2="218"
              y2="21"
              stroke="black"
              strokeWidth="10"
            />
            <path
              d="M39 52.9522H45.2083C45.3186 54.7411 45.4014 56.3857 45.4566 57.8861C45.567 59.3288 45.6773 60.7715 45.7877 62.2141C47.057 59.098 48.7125 56.6454 50.7543 54.8565C52.8513 53.0099 55.6382 52.0577 59.1148 52C62.4811 52 65.1851 52.8945 67.2269 54.6834C69.2688 56.4723 70.4552 58.8094 70.7864 61.6948C72.166 58.7517 73.8491 56.4146 75.8357 54.6834C77.8776 52.9522 80.6092 52.0577 84.0307 52C87.6177 52 90.4321 53.0099 92.4739 55.0296C94.5709 57.0494 95.6746 59.6462 95.785 62.82V89.1344H88.6662V66.1959C88.5558 64.3493 87.9488 62.7912 86.8451 61.5216C85.7966 60.1944 84.0583 59.473 81.6301 59.3576C78.3191 59.3576 75.7254 60.4829 73.8491 62.7335C71.9728 64.9264 70.9795 67.754 70.8691 71.2164V89.1344H63.8331V66.1959C63.7227 64.3493 63.0881 62.7912 61.9292 61.5216C60.8255 60.1944 59.1148 59.473 56.797 59.3576C55.1415 59.3576 53.6515 59.675 52.3271 60.3098C51.0027 60.8869 49.8714 61.6948 48.9332 62.7335C47.9951 63.7722 47.2777 65.0129 46.781 66.4556C46.2844 67.8983 46.036 69.4852 46.036 71.2164V89.1344H39V52.9522Z"
              fill="#F96465"
            />
            <path
              d="M134.67 84.8929C133.015 86.451 131 87.6917 128.627 88.615C126.254 89.5383 123.826 90 121.343 90C118.805 90 116.404 89.5095 114.141 88.5285C111.934 87.4898 110.003 86.1336 108.347 84.4601C106.692 82.7289 105.367 80.7092 104.374 78.4009C103.436 76.0926 102.967 73.6401 102.967 71.0433C102.967 68.4465 103.436 65.9939 104.374 63.6857C105.367 61.3774 106.692 59.3576 108.347 57.6264C110.003 55.8952 111.906 54.5391 114.059 53.5581C116.266 52.5194 118.611 52 121.095 52C125.013 52 128.407 53.2407 131.276 55.7221C134.201 58.1458 136.298 61.3485 137.567 65.3303C135.857 65.9651 133.898 66.7441 131.69 67.6674C129.483 68.5907 127.193 69.5718 124.82 70.6105C122.447 71.5915 120.074 72.5725 117.701 73.5535C115.328 74.5346 113.121 75.429 111.079 76.2369C112.017 78.1989 113.369 79.7859 115.135 80.9977C116.956 82.1519 118.97 82.7289 121.177 82.7289C122.667 82.7289 124.157 82.4404 125.647 81.8633C127.193 81.2863 128.434 80.5072 129.372 79.5262L134.67 84.8929ZM128.71 63.5991C128.048 62.1564 126.999 61.0888 125.565 60.3964C124.13 59.6462 122.667 59.2711 121.177 59.2711C119.577 59.2711 118.087 59.5885 116.708 60.2232C115.383 60.858 114.224 61.7236 113.231 62.82C112.238 63.8588 111.437 65.0706 110.83 66.4556C110.279 67.8405 110.003 69.2544 110.003 70.697C110.003 70.9856 110.003 71.1875 110.003 71.303C110.058 71.4184 110.085 71.5049 110.085 71.5626C111.52 70.9856 113.065 70.3508 114.721 69.6583C116.432 68.9081 118.115 68.1868 119.77 67.4943C121.426 66.7441 123.026 66.0516 124.571 65.4169C126.117 64.7244 127.496 64.1185 128.71 63.5991Z"
              fill="#F96465"
            />
            <path
              d="M143.684 52.9522H149.892C150.002 54.7411 150.085 56.3857 150.14 57.8861C150.251 59.3288 150.361 60.7715 150.471 62.2141C151.741 59.098 153.534 56.6166 155.852 54.7699C158.225 52.9233 161.122 52 164.544 52C168.02 52 170.807 53.0099 172.904 55.0296C175.001 57.0494 176.105 59.6462 176.215 62.82V89.1344H169.096V66.1959C168.986 64.3493 168.379 62.7912 167.275 61.5216C166.171 60.1944 164.433 59.473 162.06 59.3576C160.405 59.3576 158.887 59.675 157.508 60.3098C156.128 60.8869 154.941 61.6948 153.948 62.7335C152.955 63.7722 152.155 65.0129 151.548 66.4556C150.996 67.8983 150.72 69.4852 150.72 71.2164V89.1344H143.684V52.9522Z"
              fill="#F96465"
            />
            <path
              d="M218 89.9134H212.04L211.212 79.8724C209.943 82.8155 208.15 85.2392 205.832 87.1435C203.569 89.0478 200.672 90 197.14 90C193.608 90 190.794 89.019 188.697 87.0569C186.655 85.0372 185.579 82.4115 185.469 79.18V52.9522H192.505V75.8907C192.615 77.6796 193.222 79.2088 194.326 80.4784C195.485 81.7479 197.251 82.4692 199.624 82.6424C201.279 82.6424 202.797 82.3538 204.176 81.7768C205.556 81.142 206.742 80.3052 207.736 79.2665C208.729 78.2278 209.502 76.9871 210.053 75.5444C210.605 74.1017 210.881 72.5148 210.881 70.7836V52.9522H218V89.9134Z"
              fill="#F96465"
            />
            <path
              d="M32.7719 38.0231H0.371826L20.1079 9.6524H8.59521C6.67642 9.6524 5.08656 9.13159 3.82565 8.08996C2.56473 7.04833 1.93427 5.65036 1.93427 3.89604V0.359985H8.26627V1.42903C8.26627 2.36101 8.48556 2.96406 8.92414 3.23817C9.36272 3.51228 10.0754 3.64934 11.0622 3.64934H33.0186L13.8582 31.1154H32.7719V38.0231Z"
              fill="black"
            />
            <path
              d="M37.2633 21.1651C37.2633 18.6433 37.7293 16.2859 38.6613 14.093C39.6481 11.8453 40.9638 9.89911 42.6085 8.25443C44.2532 6.55493 46.1446 5.21178 48.2826 4.22498C50.4755 3.23817 52.8055 2.74477 55.2725 2.74477C56.9172 2.74477 58.4248 2.96406 59.7954 3.40263C61.1659 3.78639 62.3446 4.2798 63.3314 4.88285C64.3182 5.48589 65.1132 6.11635 65.7162 6.77422C66.3193 7.43209 66.7304 8.00773 66.9497 8.50113L67.2787 3.64934H74.0218V38.0231H66.9497V33.6647C66.6756 34.1033 66.237 34.6241 65.634 35.2271C65.0309 35.8302 64.236 36.4058 63.2492 36.954C62.3172 37.4474 61.1934 37.886 59.8776 38.2698C58.5619 38.6535 57.0543 38.8454 55.3548 38.8454C52.7233 38.8454 50.2837 38.3794 48.0359 37.4474C45.843 36.4606 43.9517 35.1723 42.3618 33.5824C40.772 31.9378 39.511 30.0464 38.5791 27.9083C37.7019 25.7702 37.2633 23.5225 37.2633 21.1651ZM44.3354 20.754C44.3354 22.3438 44.6095 23.824 45.1578 25.1946C45.7608 26.5652 46.5557 27.7438 47.5425 28.7306C48.5293 29.7175 49.708 30.5124 51.0786 31.1154C52.4492 31.6637 53.9568 31.9378 55.6015 31.9378C57.2461 31.9378 58.7537 31.6637 60.1243 31.1154C61.5497 30.5124 62.7558 29.7175 63.7426 28.7306C64.7842 27.689 65.5792 26.5103 66.1274 25.1946C66.6756 23.824 66.9497 22.3438 66.9497 20.754C66.9497 19.1641 66.6756 17.7113 66.1274 16.3956C65.5792 15.025 64.7842 13.8463 63.7426 12.8595C62.7558 11.8727 61.5497 11.1052 60.1243 10.557C58.7537 9.95393 57.2461 9.6524 55.6015 9.6524C53.9568 9.6524 52.4492 9.95393 51.0786 10.557C49.708 11.1052 48.5293 11.8727 47.5425 12.8595C46.5557 13.8463 45.7608 15.025 45.1578 16.3956C44.6095 17.7113 44.3354 19.1641 44.3354 20.754Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="qline"></div>
      <style jsx>{`
        .TopBar {
          width: 100%;
          padding-top: ${size ? "1rem " : "2rem "};
          padding-bottom: ${size ? ".5rem" : "2rem"};
          margin: 0;
          ${styles.flexBothcenter};
        }
        .logoTxt {
          width: ${size ? "70%" : "100%"};
          text-align: center;
        }
        .qline {
          width: 100%;
          height: 0.6rem;
          background: ${styles.lineargradeint};
        }
      `}</style>
    </>
  );
}
