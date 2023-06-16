'use client';

import config from '@root/sanity.config';
import { NextStudio } from 'next-sanity/studio';

const StudioPage = () => <NextStudio config={config} />;
export default StudioPage;


