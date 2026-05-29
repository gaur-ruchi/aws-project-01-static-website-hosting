# Lessons Learned

## 1. ACM Region Requirement

CloudFront only accepts ACM certificates created in the us-east-1 region.

---

## 2. Route53 Alias Records

Alias records can point directly to CloudFront without needing an IP address.

---

## 3. CloudFront Caching

Changes in S3 are not always immediately visible because CloudFront caches content.

---

## 4. DNS Propagation Delay

Route53 changes may take several minutes before becoming visible globally.

---

## 5. HTTPS Best Practice

Using CloudFront with ACM is the preferred method to provide HTTPS for S3-hosted websites.

---

## 6. Security Improvement

Direct S3 bucket access should be blocked and CloudFront should be the only entry point.
