
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const sockTheme: CustomThemeConfig = {
    name: 'sock-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "134 111 103",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #F36D6F 
        "--color-primary-50": "253 233 233", // #fde9e9
        "--color-primary-100": "253 226 226", // #fde2e2
        "--color-primary-200": "252 219 219", // #fcdbdb
        "--color-primary-300": "250 197 197", // #fac5c5
        "--color-primary-400": "247 153 154", // #f7999a
        "--color-primary-500": "243 109 111", // #F36D6F
        "--color-primary-600": "219 98 100", // #db6264
        "--color-primary-700": "182 82 83", // #b65253
        "--color-primary-800": "146 65 67", // #924143
        "--color-primary-900": "119 53 54", // #773536
        // secondary | #F2EAE1 
        "--color-secondary-50": "253 252 251", // #fdfcfb
        "--color-secondary-100": "252 251 249", // #fcfbf9
        "--color-secondary-200": "252 250 248", // #fcfaf8
        "--color-secondary-300": "250 247 243", // #faf7f3
        "--color-secondary-400": "246 240 234", // #f6f0ea
        "--color-secondary-500": "242 234 225", // #F2EAE1
        "--color-secondary-600": "218 211 203", // #dad3cb
        "--color-secondary-700": "182 176 169", // #b6b0a9
        "--color-secondary-800": "145 140 135", // #918c87
        "--color-secondary-900": "119 115 110", // #77736e
        // tertiary | #9085BA 
        "--color-tertiary-50": "238 237 245", // #eeedf5
        "--color-tertiary-100": "233 231 241", // #e9e7f1
        "--color-tertiary-200": "227 225 238", // #e3e1ee
        "--color-tertiary-300": "211 206 227", // #d3cee3
        "--color-tertiary-400": "177 170 207", // #b1aacf
        "--color-tertiary-500": "144 133 186", // #9085BA
        "--color-tertiary-600": "130 120 167", // #8278a7
        "--color-tertiary-700": "108 100 140", // #6c648c
        "--color-tertiary-800": "86 80 112", // #565070
        "--color-tertiary-900": "71 65 91", // #47415b
        // success | #76B479 
        "--color-success-50": "234 244 235", // #eaf4eb
        "--color-success-100": "228 240 228", // #e4f0e4
        "--color-success-200": "221 236 222", // #ddecde
        "--color-success-300": "200 225 201", // #c8e1c9
        "--color-success-400": "159 203 161", // #9fcba1
        "--color-success-500": "118 180 121", // #76B479
        "--color-success-600": "106 162 109", // #6aa26d
        "--color-success-700": "89 135 91", // #59875b
        "--color-success-800": "71 108 73", // #476c49
        "--color-success-900": "58 88 59", // #3a583b
        // warning | #F26469 
        "--color-warning-50": "253 232 233", // #fde8e9
        "--color-warning-100": "252 224 225", // #fce0e1
        "--color-warning-200": "252 216 218", // #fcd8da
        "--color-warning-300": "250 193 195", // #fac1c3
        "--color-warning-400": "246 147 150", // #f69396
        "--color-warning-500": "242 100 105", // #F26469
        "--color-warning-600": "218 90 95", // #da5a5f
        "--color-warning-700": "182 75 79", // #b64b4f
        "--color-warning-800": "145 60 63", // #913c3f
        "--color-warning-900": "119 49 51", // #773133
        // error | #3B889A 
        "--color-error-50": "226 237 240", // #e2edf0
        "--color-error-100": "216 231 235", // #d8e7eb
        "--color-error-200": "206 225 230", // #cee1e6
        "--color-error-300": "177 207 215", // #b1cfd7
        "--color-error-400": "118 172 184", // #76acb8
        "--color-error-500": "59 136 154", // #3B889A
        "--color-error-600": "53 122 139", // #357a8b
        "--color-error-700": "44 102 116", // #2c6674
        "--color-error-800": "35 82 92", // #23525c
        "--color-error-900": "29 67 75", // #1d434b
        // surface | #FBF9F7 
        "--color-surface-50": "254 254 254", // #fefefe
        "--color-surface-100": "254 254 253", // #fefefd
        "--color-surface-200": "254 254 253", // #fefefd
        "--color-surface-300": "253 253 252", // #fdfdfc
        "--color-surface-400": "252 251 249", // #fcfbf9
        "--color-surface-500": "251 249 247", // #FBF9F7
        "--color-surface-600": "226 224 222", // #e2e0de
        "--color-surface-700": "188 187 185", // #bcbbb9
        "--color-surface-800": "151 149 148", // #979594
        "--color-surface-900": "123 122 121", // #7b7a79

    }
}