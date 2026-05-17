# 🚀 Static Website Deployment Using AWS S3 & CloudFront

## Project Overview

This project demonstrates the deployment of a fully functional and scalable static website using **Amazon S3** and **Amazon CloudFront**.

The objective of this project was to implement a cloud-native static hosting solution capable of delivering website content securely, efficiently, and globally using AWS infrastructure services.

The website was designed using front-end technologies and deployed using AWS Free Tier services to simulate a real-world production deployment workflow.

---

# Architecture Diagram

![Architecture Diagram](images/architecture-diagram.png)

---

# Technologies & AWS Services Used

## Front-End Technologies
- HTML5
- CSS3
- JavaScript

## AWS Cloud Services
- Amazon S3
- Amazon CloudFront
- AWS IAM Policies
- Static Website Hosting

---

# Project Features

- Responsive static website design
- Static website hosting using Amazon S3
- CloudFront CDN integration for faster global delivery
- Downloadable CV integration
- Optimized image and media delivery
- Public access policy configuration
- Scalable and cost-effective cloud architecture

---

# Cloud Concepts Applied

This project demonstrates practical understanding of:

- Object Storage Architecture
- Static Website Hosting
- CDN (Content Delivery Network)
- Access Control & Bucket Policies
- Deployment Validation
- Scalable Infrastructure Design
- Performance Optimization
- Cloud-Native Deployment Models

---

# Deployment Process

## Step 1: Create an S3 Bucket
A globally unique S3 bucket was created to host the website files.

## Step 2: Configure Public Access
Public access settings were configured to allow users access to website content.

## Step 3: Apply Bucket Policy
A bucket policy was configured to allow `GetObject` permissions for public file access.

## Step 4: Upload Website Files
The website files including HTML, CSS, JavaScript, images, and downloadable resources were uploaded into the S3 bucket.

## Step 5: Enable Static Website Hosting
Static website hosting was enabled in the bucket properties.

## Step 6: Test Website Endpoint
The S3 website endpoint was tested successfully.

## Step 7: Configure CloudFront Distribution
Amazon CloudFront was configured using the S3 bucket as the origin.

## Step 8: Validate Deployment
The website deployment was validated using the CloudFront domain URL.

---

# 🌍 Live Website

🔗 CloudFront Live URL:

```bash
https://dwp4367vovavn.cloudfront.net
