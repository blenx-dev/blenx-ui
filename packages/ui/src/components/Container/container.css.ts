import { recipe } from "@vanilla-extract/recipes";

export const containerRecipe = recipe({
  base: {
    boxSizing: "border-box",
  },
  variants: {
    size: {
      xxs: { width: "min(240px, 100%)" },
      xs: { width: "min(320px, 100%)" },
      sm: { width: "min(480px, 100%)" },
      md: { width: "min(640px, 100%)" },
      lg: { width: "min(768px, 100%)" },
      xl: { width: "min(1024px, 100%)" },
      "2xl": { maxWidth: "1280px", width: "100%" },
      "3xl": { maxWidth: "1440px", width: "100%" },
      full: { maxWidth: "100%", width: "100%" },
    },
    centered: {
      true: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    contentCentered: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
  defaultVariants: {
    size: "lg",
    centered: true,
  },
});
