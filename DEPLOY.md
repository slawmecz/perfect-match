# Deployment — perfect-match

The site is deployed to **GitHub Pages** by the workflow at `.github/workflows/deploy.yml`.
The workflow auto-detects whether you are serving from the temporary GitHub URL (`<user>.github.io/<repo>/`) or from a custom domain (e.g. `kojarzeniepar.pl`) and sets `basePath` and the canonical URL accordingly.

---

## 1. First deployment (temporary GitHub URL)

1. Make sure `public/CNAME` **does not exist** yet (this is intentional for the first deploy).
2. Push the code to the `main` branch (e.g. via GitHub Desktop).
3. On GitHub.com go to the repository → `Settings` → `Pages` → **Build and deployment**.
4. Under **Source**, select **GitHub Actions** (instead of the default "Deploy from a branch").
5. The workflow runs automatically. After ~2 minutes the site is live at:

   ```
   https://<github-username>.github.io/perfect-match/
   ```

Every subsequent push to `main` triggers a redeploy.

---

## 2. Switching to a custom domain (e.g. `kojarzeniepar.pl`)

Once you have the domain and want to point it at this site:

### Step A — DNS records at your registrar

Configure the DNS records for `kojarzeniepar.pl`:

| Type  | Name | Value                                                                                                   |
| ----- | ---- | ------------------------------------------------------------------------------------------------------- |
| A     | `@`  | `185.199.108.153`<br/>`185.199.109.153`<br/>`185.199.110.153`<br/>`185.199.111.153`                     |
| CNAME | `www`| `<github-username>.github.io.`                                                                          |

(If you only need `www.kojarzeniepar.pl`, the CNAME record on `www` is enough.)

### Step B — Add a `CNAME` file to the repo

Create the file `public/CNAME` containing a **single line** with the domain:

```
kojarzeniepar.pl
```

Push to `main`. The workflow detects the `CNAME` file, sets `basePath=""` and `NEXT_PUBLIC_SITE_URL=https://kojarzeniepar.pl`, and deploys.

### Step C — Configure the domain in GitHub Pages

After the first deploy that includes the `CNAME` file:

1. Open `Settings` → `Pages` on GitHub.
2. In the **Custom domain** field, enter `kojarzeniepar.pl` and click **Save**.
3. Once DNS has propagated (usually a few minutes), tick **Enforce HTTPS**.

Done. The site is live at `https://kojarzeniepar.pl`. The temporary `<user>.github.io/perfect-match` URL will redirect to it.

---

## 3. Updating content

All visible text on the site lives in a single file:

```
src/content/site.ts
```

Edit, commit and push — the workflow does the rest.

---

## 4. Google Search Console (after going live with the final domain)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a new property of type "URL prefix" → `https://kojarzeniepar.pl`.
3. Verify ownership (HTML file, meta tag or DNS — the meta tag is usually the simplest).
4. Submit the sitemap: `https://kojarzeniepar.pl/sitemap.xml`.
5. Request indexing of the home page to speed up appearance in search results.
