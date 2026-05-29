# AWS Static Website Hosting using S3, CloudFront, Route53 and ACM

## Project Overview

This project demonstrates the deployment of a highly available, secure, and globally distributed static website on AWS.

The solution uses Amazon S3 for website storage, CloudFront as a Content Delivery Network (CDN), Route53 for DNS management, and AWS Certificate Manager (ACM) for SSL/TLS encryption.

The website is accessible through a custom domain over HTTPS and benefits from low-latency content delivery through CloudFront edge locations.

---

## Architecture

User → Route53 → CloudFront → S3 Bucket

## Architecture Diagram
![image alt](https://github.com/gaur-ruchi/aws-project-01-static-website-hosting/blob/main/architecture-diagram.png?raw=true)

### Components

#### Amazon S3

Used to host static website files such as:

* HTML
* CSS
* JavaScript
* Images

#### Amazon CloudFront

Provides:

* Global content caching
* Reduced latency
* HTTPS support
* Improved security

#### AWS Certificate Manager (ACM)

Provides:

* Free SSL/TLS certificate
* HTTPS encryption
* DNS-based certificate validation

#### Route53

Provides:

* Domain name resolution
* Alias record to CloudFront distribution

---

## Implementation Steps

### Step 1: Create S3 Bucket

Created an S3 bucket to store website files.

Key configurations:

* Bucket name matched domain name
* Static website hosting enabled
* Index document configured
* Error document configuration (optional)

---

### Step 2: Upload Website Content

Uploaded:

* index.html
* style.css
* script.js
* error.html

Verified website accessibility through the S3 endpoint.

---

### Step 3: Request SSL Certificate

Created a public certificate in AWS Certificate Manager.

Configuration:

* Certificate validated using DNS records in Route53
* Certificate issued successfully

---

### Step 4: Create CloudFront Distribution

Configured CloudFront with:

* S3 bucket as origin
* HTTPS redirection
* ACM certificate attachment
* Default root object set to index.html

---

### Step 5: Configure Route53

Created DNS records:

* A (Alias) record
* Targeted CloudFront distribution

---

### Step 6: Validation Testing

Verified:

* Website accessibility
* HTTPS functionality
* CloudFront caching
* DNS resolution

---

## Security Considerations

* HTTPS enforced through CloudFront
* SSL certificate managed by ACM
* DNS validation used for certificate issuance

---

## Key Learnings

* Static website hosting on Amazon S3
* CloudFront distribution setup
* SSL certificate creation using ACM
* Route53 alias record configuration
* End-to-end HTTPS implementation

---
