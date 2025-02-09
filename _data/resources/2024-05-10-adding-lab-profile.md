---
template: BlogPost
path: /resources/adding-lab-profile
date: 2024-05-10T13:00:00.137Z
title: Adding Your Profile to the Lab Webpage
titlevn: Thêm profile của bạn vào trang web của Lab
thumbnail: ""
metaDescription: How to add and customize your profile on the lab webpage
---

We host our lab website on GitHub at [github.com/AI4Code-HUST/AI4Code-HUST.github.io](https://github.com/AI4Code-HUST/AI4Code-HUST.github.io). The website is built using the [GatsbyJS](https://www.gatsbyjs.com/) framework.

### How to Add Your Profile

1. **Fork and Clone the Repository:**
   - Fork the [repository](https://github.com/AI4Code-HUST/AI4Code-HUST.github.io).
   - Clone it to your local environment.

2. **Add Your Profile:**
   - Create a markdown file under `_data/people/` named `<your_profile.md>`.
   - Add your profile image to `static/assets/people/` as `<your_photo.png>`.

   Example profile markdown file:

   ```markdown
   ---
   template: BlogPost
   path: /people/<your_name>
   date: 2022-02-01T06:15:50.738Z
   title: <Your Name>
   thumbnail: /assets/people/<your_name>.jpg
   position: member
   metaDescription: Undergraduate Student
   metaDescriptionvn: Sinh viên
   order: 8
   ---

   My <linkedin profile> or <github personal page>
   ```

3. **Make a Pull Request**
