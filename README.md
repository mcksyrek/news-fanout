# news-fanout

A serverless pipeline for ingesting breaking news from public news feeds (RSS), publishing them to Amazon SNS, distributing via SQS, and processing asynchronously with AWS Lambda.

## Project Overview

This project demonstrates a basic **event-driven architecture** using AWS services:

- **RSS Scraper Lambda**: Fetches headlines from a news provider (e.g. BBC, CNN).
- **Amazon SNS**: Publishes news events.
- **Amazon SQS**: Subscribes to SNS to decouple processing.
- **Lambda Processor**: Consumes messages from SQS and performs arbitrary logic (e.g. save to DB, log, forward, filter).

It's a lightweight, cloud-native system suitable for learning, prototyping, or extending with real-time analytics, notifications, or storage.
