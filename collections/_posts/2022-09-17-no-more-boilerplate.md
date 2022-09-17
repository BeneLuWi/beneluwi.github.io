---
layout: post
title: Reduce Boilerplate Code with File Templates in IntelliJ
date: 2022-09-17 16:04:44 +0200
image: /assets/images/2022-09-17-no-more-boilerplate/gears.jpg
image_caption: Photo by <a href="https://unsplash.com/@mikehindle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Hindle</a> on <a href="https://unsplash.com/s/photos/machine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
image_base_dir: /assets/images/2022-09-17-no-more-boilerplate/
categories:
  - intellij-ide
tags:
  - templating
  - jekyll-blog
  - react
  - IntelliJ
description: Be more productive with the use of file templates for your React Components and blog posts
---

While I enjoy writing reusable code and templating, I don't really like the actual copying and pasting, 
modifying filenames only to see later on that I forgot to modify certain areas.

If you use Jetbrains IDEs you probably already used `File and Code Templates` without knowing that you can create your 
own templates, that do most of this for you...

## Easier Jekyll Blogging with File Templates in Jetbrains

- Go to `Preferences > Editor > File and Code Templates` or use the global Search `⬆⬆`(double shift) and
  search `File and Code Templates`, if you're a cool short-cutter
- Press `+` to add a template
- Name it e.g. `Jekyll Blog Post` with the `md` extension

You can use good number of variables to include logic and simplify/automate some of your blogging life, even in the file
name (!).

Since Jekyll Posts use a date in the file name, we can set the `File name` to: `${YEAR}-${MONTH}-${DAY}-${NAME}`.
If you now use the template, you are asked to enter a file name and voilà: You already saved the time to look at the
calendar for the new blog post!

![Create Blog Post]({{page.image_base_dir}}test-template.jpg)

![New File Name with Date]({{page.image_base_dir}}file-name.jpg)

Now you can further edit the template and go crazy.
I would recommend to at least cover the basics in the `Jekyll Front Matter`, so the template looks like this:

```yaml
---
layout: post
title: ${NAME}
date: ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}:${SECOND} +0200
categories:
---
```

You might find, that the predefined variables are not sufficient to your automation needs.
Simply add any variable you want to use in the template, like `${main_category}`:

```yaml
---
layout: post
title: ${NAME}
date: ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}:${SECOND} +0200
categories:
  - ${main_category}
---
```

The `new file` prompt now has an additional field `main category`, whose value is then inserted in the created file.

Your finished template could look something like this:

![Blog Template]({{page.image_base_dir}}blog-template.jpg)


## Templating for React Components

_If you only came here for the React Component Template, check out the upper part of the tutorial on how to create a file template_ 😉

Of course these file templates can simplify your everyday programming life as well. 
If you have a certain file structure for e.g. your `React Components` this approach can greatly reduce the boilerplate
code you have to write:

```ts
import React, {FunctionComponent} from 'react';

type ${NAME}Props = {}

const ${NAME}:

FunctionComponent <${NAME}Props > = ({}) => {

  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/


  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/


  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <div>${NAME}</div>
  )

}

export default ${NAME};
```

### Resources

- https://www.jetbrains.com/help/webstorm/file-template-variables.html
- https://jekyllrb.com/docs/posts/
- https://jekyllrb.com/docs/front-matter/