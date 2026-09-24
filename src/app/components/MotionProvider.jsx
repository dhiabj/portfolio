'use client';
import { MotionConfig } from 'framer-motion';

const MotionProvider = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
