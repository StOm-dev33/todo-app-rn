import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.optional(v.number()),
    completed: v.boolean(),
    userId: v.string(),
  }).index("by_user", ["userId"]),
});

// === QUERIES & MUTATIONS ===
import { query, mutation } from "./_generated/server";

export const get = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("todos")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

export const add = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.optional(v.number()),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("todos", {
      ...args,
      completed: false,
    });
  },
});

export const toggle = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, { id }) => {
    const todo = await ctx.db.get(id);
    if (todo) {
      await ctx.db.patch(id, { completed: !todo.completed });
    }
  },
});

export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});