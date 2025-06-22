import '../scss/blog.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogSlider, useTabFilter } from './components/blog/blogSlider.js';
import { useArticlesSlider } from './components/blog/articlesSlider.js';

useTheme();
useBurger();
useBlogSlider();
useTabFilter();
useArticlesSlider();
