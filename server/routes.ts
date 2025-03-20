import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  app.use('/api', (req, res, next) => {
    console.log(`API Request: ${req.method} ${req.path}`);
    next();
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'REIGN Lab API is running' });
  });

  // The HTTP server is created and returned here
  // Vite dev server middleware will be attached in vite.ts
  const httpServer = createServer(app);
  return httpServer;
}
