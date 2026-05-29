# AWS CLI Commands

## Create S3 Bucket

aws s3 mb s3://my-static-website-demo

---

## Upload Files

aws s3 cp index.html s3://my-static-website-demo

aws s3 cp style.css s3://my-static-website-demo

aws s3 cp script.js s3://my-static-website-demo

---

## Sync Website Folder

aws s3 sync ./website s3://my-static-website-demo

---

## List Buckets

aws s3 ls

---

## List Bucket Content

aws s3 ls s3://my-static-website-demo

---