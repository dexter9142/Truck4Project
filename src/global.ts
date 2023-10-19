import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-text-base-font-semibold: Inter;

/* font sizes */
--body-text-base-font-semibold-size: 16px;
--body-text-sm-font-semibold-size: 14px;
--body-text-lg-font-semibold-size: 18px;
--desktop-headline-h5-text-xl-size: 20px;
--desktop-headline-h4-text-2xl-size: 24px;

/* Colors */
--brand-500: #fb814c;
--brand-600-main: #fa6f32;
--basic-white: #fff;
--neutral-300: #cbd5e1;
--neutral-600: #475569;
--neutral-700: #334155;
--brand-50: #feede5;
--neutral-100: #f1f5f9;
--neutral-900: #0f172a;
--status-blue: #3c85eb;
--neutral-50: #f8fafc;
--neutral-500: #64748b;

/* Gaps */
--gap-xs: 12px;
--gap-13xl: 32px;
--gap-5xs: 8px;
--gap-9xs: 4px;

/* Paddings */
--padding-3xs: 10px;
--padding-base: 16px;
--padding-xs: 12px;
--padding-13xl: 32px;
--padding-7xs: 6px;

/* Border radiuses */
--br-5xs: 8px;
--br-xl: 20px;

}
`;
