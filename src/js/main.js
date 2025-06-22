import '../scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import 'intl-tel-input/build/css/intlTelInput.css';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
