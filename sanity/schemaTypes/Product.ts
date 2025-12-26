import { defineType, defineField } from "sanity";

export default defineType({
  name: "packagingProduct",
  title: "Packaging Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),

    defineField({
      name: "longDescription",
      title: "Detailed Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "boxType",
      title: "Box Type / Style",
      type: "string",
      description:
        "e.g. Auto-Bottom, Tuck Top, Gable Box, Mailer Box, Display Box, etc.",
    }),

    defineField({
      name: "industry",
      title: "Industry / Use Case",
      type: "array",
      of: [{ type: "string" }],
      description: "Cosmetics, Food, Vape, Candle, Apparel, Electronics, etc.",
    }),

    defineField({
      name: "material",
      title: "Material / Stock",
      type: "string",
      description: "Cardstock, Kraft, Corrugated, Textured stock, Metallic, etc.",
    }),

    defineField({
      name: "dimensions",
      title: "Dimensions (mm)",
      type: "object",
      fields: [
        { name: "width", title: "Width", type: "number" },
        { name: "height", title: "Height", type: "number" },
        { name: "depth", title: "Depth", type: "number" },
      ],
    }),

    defineField({
      name: "finishOptions",
      title: "Printing / Finishing Options",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Foil, Embossing, Debossing, Spot UV, Matte/Gloss Lamination, Inside Print, Window Cut, etc.",
    }),

    defineField({
      name: "moq",
      title: "Minimum Order Quantity",
      type: "number",
      description: "Usually 100+ for custom packaging",
    }),

    defineField({
      name: "leadTime",
      title: "Production Time",
      type: "string",
      description: "e.g. 8–10 business days, 2 weeks, etc.",
    }),

    defineField({
      name: "basePrice",
      title: "Base Price (Approx)",
      type: "number",
      description:
        "Optional sample price. Custom packaging usually requires a quote.",
    }),

    defineField({
      name: "image",
      title: "Product Images / Mockups",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
      ],
    }),

    defineField({
      name: "isFeatured",
      title: "Featured Product?",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image.0",
      subtitle: "boxType",
    },
  },
});
